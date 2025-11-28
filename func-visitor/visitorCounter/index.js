<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Jan Šupík — Cloud Resume</title>
  <meta name="description" content="Jan Šupík — Infrastructure Engineer. VMware, Storage, Backup, Migrations, Azure (learning)." />

  <style>
    :root{
      --bg:#05060a;
      --panel:#0f1220;
      --muted:#9aa3b2;
      --accent-a:#6df0ff;
      --accent-b:#8a6bff;
      --glass: rgba(255,255,255,0.03);
      --text:#e8eef6;
      --chip:#111421;
      --radius:16px;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }

    html,body{height:100%;margin:0;background:
      radial-gradient(900px 450px at 10% 10%, rgba(138,107,255,0.06), transparent 8%),
      radial-gradient(700px 350px at 90% 85%, rgba(109,240,255,0.03), transparent 6%),
      var(--bg);
      color:var(--text);-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;}

    .wrap{
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:40px 24px;
      box-sizing:border-box;
    }

    .card {
      width:100%;
      max-width:1200px;
      display:grid;
      grid-template-columns: 360px 1fr;
      gap:28px;
      background: linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.01));
      border:1px solid rgba(255,255,255,0.03);
      border-radius:var(--radius);
      padding:28px;
      box-shadow: 0 20px 60px rgba(3,6,20,0.6);
    }

    /* Left sidebar */
    .left {
      display:flex;
      flex-direction:column;
      gap:16px;
      align-items:center;
    }

    .avatar {
      width:220px;height:220px;border-radius:20px;overflow:hidden;
      border:2px solid rgba(255,255,255,0.04);
      box-shadow: 0 20px 40px rgba(0,0,0,0.6);
    }
    .avatar img{width:100%;height:100%;object-fit:cover;display:block}

    .name{font-size:22px;font-weight:800;letter-spacing:0.2px}
    .role{color:var(--muted);font-size:13px;margin-top:4px;text-align:center}

    .summary{color:var(--muted);font-size:14px;line-height:1.5;text-align:center}

    .badges{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:6px}
    .badge{background:linear-gradient(90deg,var(--accent-a),var(--accent-b));padding:8px 12px;border-radius:999px;font-weight:700;color:#071021;font-size:13px;box-shadow:0 8px 24px rgba(106,110,255,0.08)}

    .actions{display:flex;gap:10px;margin-top:10px}
    .btn{
      display:inline-flex;align-items:center;gap:8px;cursor:pointer;border-radius:12px;padding:10px 14px;font-weight:700;text-decoration:none;
      color:#071021;background:linear-gradient(90deg,var(--accent-a),var(--accent-b));box-shadow:0 12px 36px rgba(106,110,255,0.12);
    }
    .btn.ghost{background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,0.04);box-shadow:none;font-weight:600}

    .stat {
      width:100%;
      margin-top:12px;
      background:var(--glass);padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,0.02);text-align:center;
    }
    .stat .label {font-size:12px;color:var(--muted)}
    .stat .value {font-size:20px;font-weight:800;color:var(--accent-a);margin-top:6px}

    /* Right content */
    .right {padding:6px 4px}
    .header-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:6px}
    .title{font-size:18px;font-weight:800}
    .sub{color:var(--muted);font-size:13px}

    .grid {
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:14px;
    }

    .panel{
      background: linear-gradient(180deg, rgba(255,255,255,0.008), rgba(255,255,255,0.006));
      border-radius:12px;padding:14px;border:1px solid rgba(255,255,255,0.02);
      box-shadow:0 8px 28px rgba(0,0,0,0.45);
    }

    h3{margin:0 0 8px 0;font-size:15px}
    p{margin:0;color:var(--muted);font-size:13px;line-height:1.45}

    .skill-list{display:flex;flex-wrap:wrap;gap:8px}
    .skill{background:var(--chip);padding:8px 10px;border-radius:10px;font-weight:700;color:var(--text);font-size:13px;border:1px solid rgba(255,255,255,0.02)}

    .experience-item{display:flex;gap:12px;align-items:flex-start}
    .exp-dot{width:44px;height:44px;border-radius:10px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--muted)}

    footer{grid-column:1/-1;text-align:center;color:var(--muted);margin-top:12px;font-size:13px}

    @media (max-width:980px){
      .card{grid-template-columns:1fr; padding:20px}
      .left{order:2}
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card" role="main">

      <!-- LEFT -->
      <div class="left" aria-labelledby="profile-name">
        <div class="avatar" title="profile">
          <img src="profile.jpg" alt="Jan Supik profile">
        </div>

        <div id="profile-name" class="name">Jan Šupík</div>
        <div class="role">Infrastructure Engineer — VMware · Storage · Backup</div>

        <div class="summary" style="padding:0 10px;">
          Infrastructure engineer with 9+ years in datacenter operations. Focus on virtualization, storage design, backup solutions, migrations and operations. Learning Microsoft Azure and automation.
        </div>

        <div class="badges" aria-hidden="false">
          <div class="badge">VMware</div>
          <div class="badge">Storage</div>
          <div class="badge">Backup</div>
        </div>

        <div class="actions">
          <a class="btn" href="cv_jan_supik.pdf" download>Download CV</a>
          <a class="btn ghost" href="#contact">Contact</a>
        </div>

        <div class="stat" aria-live="polite">
          <div class="label">Visitor counter</div>
          <div class="value" id="counter">Loading…</div>
          <div class="sub" style="margin-top:8px;font-size:12px;color:var(--muted)">Live count powered by Azure Function</div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="right">
        <div class="header-row">
          <div>
            <div class="title">Experience & Capabilities</div>
            <div class="sub">Clear, practical engineering across virtualization, storage and operations.</div>
          </div>
        </div>

        <div style="height:12px"></div>

        <div class="grid">
          <div class="panel">
            <h3>VMware & Virtualization</h3>
            <p>Design, operation and optimization of VMware environments. Capacity planning, performance tuning and high-availability architecture.</p>
          </div>

          <div class="panel">
            <h3>Storage & Backup</h3>
            <p>Design & management of storage solutions, backup and recovery (Networker, Cohesity), retention and DR planning.</p>
          </div>

          <div class="panel">
            <h3>Migrations & Projects</h3>
            <p>Platform migrations, data migrations and cutover orchestration — planning, testing and validation for minimal downtime.</p>
          </div>

          <div class="panel">
            <h3>Operations & Support</h3>
            <p>Runbooks, incident handling, monitoring and capacity management to keep production systems reliable and secure.</p>
          </div>
        </div>

        <div style="height:18px"></div>

        <div class="panel" id="skills">
          <h3>Skills & Tools</h3>
          <p class="sub">Relevant skills based on experience.</p>
          <div style="height:10px"></div>
          <div class="skill-list">
            <div class="skill">VMware</div>
            <div class="skill">Storage Design</div>
            <div class="skill">Backup & Recovery</div>
            <div class="skill">Migrations</div>
            <div class="skill">Solution Design</div>
            <div class="skill">PowerShell</div>
            <div class="skill">GitHub</div>
            <div class="skill">Azure (learning)</div>
          </div>
        </div>

        <div style="height:14px"></div>

        <div class="panel" id="contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:jansupik95@gmail.com" style="color:var(--accent-a);text-decoration:none">jansupik95@gmail.com</a></p>
          <p>Phone: <a href="tel:+420721006468" style="color:var(--accent-a);text-decoration:none">+420 721 006 468</a></p>
          <p>Location: Prague, Czech Republic</p>
        </div>

        <div style="height:14px"></div>

        <div class="panel" id="certs">
          <h3>Certifications</h3>
          <ul style="color:var(--muted);margin:8px 0 0 18px">
            <li>AZ-900: Microsoft Azure Fundamentals</li>
            <li>Other certifications as listed in CV</li>
          </ul>
        </div>

        <footer>© Jan Šupík — Infrastructure Engineer · Built with Azure</footer>
      </div>

    </div>
  </div>

  <!-- minimal JS: visitor counter only -->
  <script>
    (function(){
      // PUT YOUR FUNCTION HOST HERE (exactly as you confirmed)
      const FUNC_URL = 'https://jan-resume-func-bmbgdkhrgefbg2ha.westeurope-01.azurewebsites.net/api/visitorCounter';
      const el = document.getElementById('counter');

      async function updateCounter() {
        if (!el) return;
        try {
          // increment
          await fetch(FUNC_URL, { method:'POST', mode:'cors' });
          // read
          const res = await fetch(FUNC_URL, { method:'GET', mode:'cors' });
          if (!res.ok) throw new Error('bad response');
          const data = await res.json();
          if (data && typeof data.count !== 'undefined') {
            el.textContent = Number(data.count).toLocaleString('en-US');
          } else {
            el.textContent = '0';
          }
        } catch (e) {
          console.warn('counter error', e);
          el.textContent = '—';
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(updateCounter, 200));
      } else {
        setTimeout(updateCounter, 200);
      }
    })();
  </script>

</body>
</html>
