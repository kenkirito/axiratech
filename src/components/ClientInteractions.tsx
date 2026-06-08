/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useEffect } from 'react'
import * as THREE from 'three'

export default function ClientInteractions() {
  useEffect(() => {
    // ──────────────── LOADER ────────────────
    setTimeout(() => document.getElementById('loader')?.classList.add('gone'), 1700);

    // ──────────────── CURSOR ────────────────
    const cur = document.getElementById('cur');
    const ring = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
    };
    document.addEventListener('mousemove', onMouseMove);

    let cursorRaf: number;
    const tickCursor = () => {
      rx += (mx - rx) * .11;
      ry += (my - ry) * .11;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      cursorRaf = requestAnimationFrame(tickCursor);
    };
    tickCursor();

    const hoverEls = document.querySelectorAll('a, button, .proj-card, .svc-card, .mini-card');
    const onEnter = () => {
      if (cur && ring) {
        cur.style.transform = 'translate(-50%,-50%) scale(2.5)';
        cur.style.background = '#F59E0B';
        ring.style.width = '56px'; ring.style.height = '56px';
        ring.style.borderColor = 'rgba(245,158,11,.5)';
      }
    };
    const onLeave = () => {
      if (cur && ring) {
        cur.style.transform = 'translate(-50%,-50%) scale(1)';
        cur.style.background = '#EF4444';
        ring.style.width = '38px'; ring.style.height = '38px';
        ring.style.borderColor = 'rgba(239,68,68,.45)';
      }
    };
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // ──────────────── NAV SCROLL ────────────────
    const nav = document.getElementById('nav');
    const onScrollNav = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScrollNav);

    // ──────────────── BACKGROUND CANVAS ────────────────
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer | null = null;
    let reqId: number;

    if (canvas) {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(innerWidth, innerHeight);

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xF5F5F7, 0.015);
      const camera = new THREE.PerspectiveCamera(58, innerWidth / innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 22);

      const N = 2000;
      const pos = new Float32Array(N * 3);
      const col = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i*3]   = (Math.random() - .5) * 80;
        pos[i*3+1] = (Math.random() - .5) * 80;
        pos[i*3+2] = (Math.random() - .5) * 60;
        const t = Math.random();
        col[i*3]   = t * .96 + (1-t) * .93;
        col[i*3+1] = t * .61 + (1-t) * .26;
        col[i*3+2] = t * .04 + (1-t) * .26;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      pGeo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
      const pts = new THREE.Points(pGeo, new THREE.PointsMaterial({
        size: .12, vertexColors: true, transparent: true, opacity: .9, sizeAttenuation: true
      }));
      scene.add(pts);

      const shapes = [
        { geo: new THREE.IcosahedronGeometry(3.2, 0),        color: 0xF59E0B, pos: [-13,  5, -14], spd: [.003,.005,.001] },
        { geo: new THREE.TorusGeometry(2.8,.6,12,72),        color: 0xEF4444, pos: [ 13, -4, -10], spd: [.002,.004,.003] },
        { geo: new THREE.OctahedronGeometry(2.8, 0),         color: 0xFBBF24, pos: [  9,  9, -20], spd: [.005,.002,.004] },
        { geo: new THREE.TetrahedronGeometry(2.2, 0),        color: 0xF59E0B, pos: [-11, -9, -18], spd: [.004,.003,.002] },
        { geo: new THREE.TorusKnotGeometry(1.6,.42,90,16),   color: 0xEF4444, pos: [  2,-12, -26], spd: [.002,.006,.001] },
        { geo: new THREE.DodecahedronGeometry(2, 0),         color: 0xF59E0B, pos: [ -6, 12, -22], spd: [.003,.002,.005] },
      ];
      const meshes = shapes.map(cfg => {
        const m = new THREE.Mesh(cfg.geo,
          new THREE.MeshBasicMaterial({ color: cfg.color, wireframe: true, transparent: true, opacity: 0.12 }));
        m.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
        (m as any)._spd = cfg.spd;
        scene.add(m);
        return m;
      });

      let pmx = 0, pmy = 0, scrolled = 0;
      const onMouseMove3d = (e: MouseEvent) => {
        pmx = (e.clientX / innerWidth  - .5) * 2;
        pmy = (e.clientY / innerHeight - .5) * 2;
      };
      document.addEventListener('mousemove', onMouseMove3d);
      const onScroll3d = () => { scrolled = window.scrollY; };
      window.addEventListener('scroll', onScroll3d);

      let tVal = 0;
      const animate = () => {
        reqId = requestAnimationFrame(animate);
        tVal += .004;
        pts.rotation.y = tVal * .04;
        pts.rotation.x = tVal * .016;
        meshes.forEach((m, i) => {
          m.rotation.x += (m as any)._spd[0];
          m.rotation.y += (m as any)._spd[1];
          m.rotation.z += (m as any)._spd[2];
          m.position.y += Math.sin(tVal + i) * .002;
        });
        camera.position.x += (pmx * 3.5 - camera.position.x) * .022;
        camera.position.y += (-pmy * 2.5 - camera.position.y) * .022;
        camera.position.z = 22 - scrolled * .008;
        camera.lookAt(scene.position);
        if (renderer) renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        if (renderer) renderer.setSize(innerWidth, innerHeight);
      };
      window.addEventListener('resize', onResize);

      (canvas as any)._cleanup = () => {
        document.removeEventListener('mousemove', onMouseMove3d);
        window.removeEventListener('scroll', onScroll3d);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(reqId);
        if (renderer) renderer.dispose();
      };
    }

    // ──────────────── HERO 3D CANVAS ────────────────
    const heroCanvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    let heroReqId: number;

    if (heroCanvas) {
      const hW = heroCanvas.clientWidth || 480;
      const hH = heroCanvas.clientHeight || 480;

      const hRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
      hRenderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      hRenderer.setSize(hW, hH);

      const hScene = new THREE.Scene();
      const hCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      hCamera.position.z = 14;

      // ── Morphing outer sphere ──
      const morphGeo = new THREE.IcosahedronGeometry(4, 4);
      const morphPos = morphGeo.attributes.position.array as Float32Array;
      const origPos  = new Float32Array(morphPos.length);
      origPos.set(morphPos);
      const morphMesh = new THREE.Mesh(morphGeo,
        new THREE.MeshBasicMaterial({ color: 0xF59E0B, wireframe: true, transparent: true, opacity: 0.18 }));
      hScene.add(morphMesh);

      // ── Inner sphere ──
      const innerMesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.8, 2),
        new THREE.MeshBasicMaterial({ color: 0xFBBF24, wireframe: true, transparent: true, opacity: 0.1 }));
      hScene.add(innerMesh);

      // ── Orbital rings ──
      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(5.6, 0.035, 8, 200),
        new THREE.MeshBasicMaterial({ color: 0xF59E0B, transparent: true, opacity: 0.4 }));
      ring1.rotation.x = Math.PI / 3;
      hScene.add(ring1);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(5.1, 0.025, 8, 200),
        new THREE.MeshBasicMaterial({ color: 0xEF4444, transparent: true, opacity: 0.28 }));
      ring2.rotation.x = -Math.PI / 4;
      ring2.rotation.y = Math.PI / 5;
      hScene.add(ring2);

      const ring3 = new THREE.Mesh(
        new THREE.TorusGeometry(6.2, 0.018, 8, 200),
        new THREE.MeshBasicMaterial({ color: 0xFBBF24, transparent: true, opacity: 0.18 }));
      ring3.rotation.x = Math.PI / 7;
      ring3.rotation.z = Math.PI / 4;
      hScene.add(ring3);

      // ── Spherical particle cloud ──
      const cloudCount = 280;
      const cloudPos = new Float32Array(cloudCount * 3);
      for (let i = 0; i < cloudCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi   = Math.acos(2 * Math.random() - 1);
        const r     = 5.5 + Math.random() * 2.5;
        cloudPos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
        cloudPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        cloudPos[i*3+2] = r * Math.cos(phi);
      }
      const cloudGeo = new THREE.BufferGeometry();
      cloudGeo.setAttribute('position', new THREE.BufferAttribute(cloudPos, 3));
      const cloud = new THREE.Points(cloudGeo,
        new THREE.PointsMaterial({ size: 0.07, color: 0xF59E0B, transparent: true, opacity: 0.75, sizeAttenuation: true }));
      hScene.add(cloud);

      // ── 3 orbiting accent spheres ──
      const orbiters = [0, (Math.PI*2)/3, (Math.PI*4)/3].map(offset => {
        const sm = new THREE.Mesh(
          new THREE.SphereGeometry(0.22, 10, 10),
          new THREE.MeshBasicMaterial({ color: 0xEF4444, transparent: true, opacity: 0.9 }));
        hScene.add(sm);
        return { mesh: sm, offset };
      });

      // ── 3 gold accent spheres on a tilted orbit ──
      const goldOrbiters = [0, Math.PI/1.5, Math.PI].map(offset => {
        const sm = new THREE.Mesh(
          new THREE.SphereGeometry(0.14, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0xFBBF24, transparent: true, opacity: 0.8 }));
        hScene.add(sm);
        return { mesh: sm, offset };
      });

      let hmx = 0, hmy = 0;
      const onHeroMouse = (e: MouseEvent) => {
        hmx = (e.clientX / innerWidth  - 0.5) * 2;
        hmy = (e.clientY / innerHeight - 0.5) * 2;
      };
      document.addEventListener('mousemove', onHeroMouse);

      let ht = 0;
      const animateHero = () => {
        heroReqId = requestAnimationFrame(animateHero);
        ht += 0.005;

        // Morphing displacement
        for (let i = 0; i < origPos.length; i += 3) {
          const x = origPos[i], y = origPos[i+1], z = origPos[i+2];
          const d = Math.sin(x * 1.4 + ht) * Math.cos(y * 1.4 + ht * 0.8) * Math.sin(z * 1.2 + ht * 1.1);
          const scale = 1 + d * 0.14;
          morphPos[i]   = x * scale;
          morphPos[i+1] = y * scale;
          morphPos[i+2] = z * scale;
        }
        morphGeo.attributes.position.needsUpdate = true;
        morphGeo.computeVertexNormals();

        morphMesh.rotation.y = ht * 0.25;
        morphMesh.rotation.x = ht * 0.12;
        innerMesh.rotation.y = -ht * 0.2;
        innerMesh.rotation.x =  ht * 0.1;

        ring1.rotation.z  =  ht * 0.28;
        ring2.rotation.z  = -ht * 0.18;
        ring2.rotation.x  = -Math.PI/4 + Math.sin(ht * 0.4) * 0.08;
        ring3.rotation.z  =  ht * 0.12;

        cloud.rotation.y  = ht * 0.06;
        cloud.rotation.x  = ht * 0.03;

        // Orbiting red spheres
        orbiters.forEach(({ mesh, offset }) => {
          const a = ht * 0.7 + offset;
          mesh.position.set(Math.cos(a) * 5.8, Math.sin(a * 0.5) * 1.4, Math.sin(a) * 5.8);
        });

        // Orbiting gold spheres on tilted plane
        goldOrbiters.forEach(({ mesh, offset }) => {
          const a = ht * 1.1 + offset;
          mesh.position.set(Math.cos(a) * 4.8, Math.cos(a * 0.7) * 4.2, Math.sin(a) * 2.2);
        });

        // Subtle mouse-driven rotation
        hScene.rotation.x += (-hmy * 0.12 - hScene.rotation.x) * 0.04;
        hScene.rotation.y += ( hmx * 0.16 - hScene.rotation.y) * 0.04;

        hRenderer.render(hScene, hCamera);
      };
      animateHero();

      const onHeroResize = () => {
        const el = heroCanvas.parentElement;
        if (!el) return;
        const s = el.clientWidth;
        hRenderer.setSize(s, s);
      };
      window.addEventListener('resize', onHeroResize);

      (heroCanvas as any)._cleanup = () => {
        document.removeEventListener('mousemove', onHeroMouse);
        window.removeEventListener('resize', onHeroResize);
        cancelAnimationFrame(heroReqId);
        hRenderer.dispose();
      };
    }

    // ──────────────── FADE-IN OBSERVER ────────────────
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
      });
    }, { threshold: .12 });
    document.querySelectorAll('.fi').forEach(el => io.observe(el));

    // ──────────────── COUNTER ANIMATION ────────────────
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseInt(el.dataset.t || '0');
        let v = 0;
        const step = target / 55;
        const timer = setInterval(() => {
          v = Math.min(v + step, target);
          el.textContent = Math.floor(v) + '+';
          if (v >= target) clearInterval(timer);
        }, 22);
        cio.unobserve(el);
      });
    }, { threshold: .6 });
    document.querySelectorAll('.stat-num').forEach(el => cio.observe(el));

    // ──────────────── 3D CARD TILT ────────────────
    function addTilt(selector: string, maxRot: number) {
      document.querySelectorAll(selector).forEach(card => {
        const c = card as HTMLElement;
        const onMove = (e: Event) => {
          const ev = e as MouseEvent;
          const r = c.getBoundingClientRect();
          const x = (ev.clientX - r.left - r.width  / 2) / (r.width  / 2);
          const y = (ev.clientY - r.top  - r.height / 2) / (r.height / 2);
          c.style.transform = `perspective(1200px) rotateX(${-y * maxRot}deg) rotateY(${x * maxRot}deg) translateY(-8px)`;
        };
        const onLeaveCard = () => {
          c.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateY(0)';
        };
        c.addEventListener('mousemove', onMove);
        c.addEventListener('mouseleave', onLeaveCard);
      });
    }
    addTilt('.svc-card',   8);
    addTilt('.proj-card',  5);
    addTilt('.proc-card',  4);
    addTilt('.testi-card', 3);

    // ──────────────── FORM ────────────────
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    const onFormSubmit = async (e: Event) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn') as HTMLButtonElement | null;
      if (!form || !btn) return;

      const data = Object.fromEntries(new FormData(form));
      btn.innerHTML = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: data.name, email: data.email, service: data.service, message: data.message }),
        });

        if (res.ok) {
          btn.innerHTML = '✓ Message Sent! We\'ll be in touch soon.';
          btn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
          form.reset();
          setTimeout(() => {
            btn.innerHTML = 'Send Message <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
            btn.style.background = '';
            btn.disabled = false;
          }, 4000);
        } else {
          throw new Error('Server error');
        }
      } catch {
        btn.innerHTML = '✕ Failed to send. Try again.';
        btn.style.background = '#ef4444';
        setTimeout(() => {
          btn.innerHTML = 'Send Message <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }
    };
    if (form) form.addEventListener('submit', onFormSubmit);

    // ──────────────── SMOOTH ACTIVE NAV ────────────────
    const sections = document.querySelectorAll('section[id]');
    const sio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-links a').forEach(a => {
            const el = a as HTMLElement;
            el.style.color = el.getAttribute('href') === '#' + entry.target.id
              ? 'var(--purple)' : '';
          });
        }
      });
    }, { threshold: .4 });
    sections.forEach(s => sio.observe(s));

    // ──────────────── MOBILE MENU ────────────────
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinksList = document.querySelectorAll('#nav-menu a');
    
    const toggleMenu = () => {
      if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      }
    };
    
    const closeMenu = () => {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    };

    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }
    navLinksList.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // ──────────────── CLEANUP ────────────────
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(cursorRaf);
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      window.removeEventListener('scroll', onScrollNav);
      if (canvas    && (canvas    as any)._cleanup) (canvas    as any)._cleanup();
      if (heroCanvas && (heroCanvas as any)._cleanup) (heroCanvas as any)._cleanup();
      if (form) form.removeEventListener('submit', onFormSubmit);
      sio.disconnect();
      cio.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div id="loader">
        <div className="loader-wordmark">AxiraTech</div>
        <div className="loader-track"><div className="loader-fill"></div></div>
      </div>
      <div id="cur"></div>
      <div id="cur-ring"></div>
      <canvas id="canvas"></canvas>
    </>
  );
}
