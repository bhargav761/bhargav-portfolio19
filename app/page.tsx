export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen p-6">

      {/* HERO */}
      <section className="flex flex-col items-center mt-16 text-center">

        <img 
          src="/profile.jpg" 
          alt="Bhargava R"
          className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg"
        />

        <h1 className="text-4xl font-bold mt-4">Bhargava R</h1>

        <p className="mt-2 text-lg">
          DevOps Engineer | Docker | Kubernetes | AWS |Azure | Gcp
        </p>

        <p className="mt-4 max-w-xl text-sm text-gray-300">
          🚀 DevOps fresher passionate about building scalable and reliable systems. 
          Skilled in CI/CD, Kubernetes, AWS, and monitoring tools with hands-on 
          experience in real-time projects and cloud deployments.
        </p>

      </section>

      {/* PROJECTS */}
      <section className="mt-16">
        <h2 className="text-2xl text-center font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          {/* AI LOG */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">🤖 AI Log & Anomaly Detection</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>⚡ Real-time log processing using Kafka & FastAPI</li>
              <li>🧠 ML-based anomaly detection for smart alerts</li>
              <li>📈 Improved issue detection by 40%</li>
              <li>🚀 Deployed using Docker, Kubernetes & CI/CD</li>
            </ul>
            <img src="/certificates/architecture.png" className="mt-4 rounded-lg" />
          </div>

          {/* DEVOPS AUTO */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">⚙️ AI DevOps Automation</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>🌐 Infrastructure automation using Terraform</li>
              <li>☸️ Kubernetes self-healing deployments</li>
              <li>🔄 CI/CD using Jenkins & GitHub Actions</li>
              <li>📊 ELK + Prometheus + Grafana monitoring</li>
            </ul>
            <img src="/certificates/architecture.png" className="mt-4 rounded-lg" />
          </div>

          {/* SECURITY */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">🔐 Network Security & IoT</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>🧪 Traffic analysis using Wireshark & Python</li>
              <li>🛡️ Identified vulnerabilities & improved security</li>
              <li>📡 Built IoT real-time monitoring system</li>
              <li>🚨 Logging & alerting integration</li>
            </ul>
            <img src="/certificates/architecture.png" className="mt-4 rounded-lg" />
          </div>

          {/* CLOUD */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">🚀 DevOps & Cloud Practice</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>📊 Monitoring dashboards (Prometheus, Grafana)</li>
              <li>☸️ Kubernetes deployments & scaling</li>
              <li>🔄 CI/CD pipelines automation</li>
              <li>☁️ AWS EC2, IAM & CloudWatch setup</li>
            </ul>
            <img src="/certificates/architecture.png" className="mt-4 rounded-lg" />
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="mt-16">
        <h2 className="text-2xl text-center font-semibold">Education</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">🎓 Master of computer application</h3>
            <p>🏫 Bruindavan group of institute, Dwarkanagara Banglore</p>
            <p>📊 75%</p>
            <p>📅 2023 - 2025</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">🎓 Bsc(CBBt) (Optional)</h3>
            <p>🏫 university college of science, Tumkur</p>
            <p>📊 65%</p>
            <p>📅 2019 - 2022</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">🏫 2nd PUC</h3>
            <p>🏫 Shanthi ssk pu college pavagada</p>
            <p>📊 67</p>
            <p>📅 2017 - 2019</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <h3 className="font-bold">🏫 SSlC</h3>
            <p>🏫 Govt junior college(High school section) pavagada</p>
            <p>📊 82%</p>
            <p>📅 2014 - 2017</p>
          </div>

        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Internships & Certifications</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <img src="/certificates/hepro.png" className="rounded-lg shadow-lg" />
          <img src="/certificates/internz.png" className="rounded-lg shadow-lg" />
          <img src="/certificates/corizo.png" className="rounded-lg shadow-lg" />

          <img src="/certificates/digital.png" className="rounded-lg shadow-lg" />
          <img src="/certificates/edunet.png" className="rounded-lg shadow-lg" />
          <img src="/certificates/vtu.png" className="rounded-lg shadow-lg" />

          <img src="/certificates/cbnl.png" className="rounded-lg shadow-lg md:col-span-3" />

        </div>
      </section>

      {/* CONTACT */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">bhargavarr1@gmail.com | +91 9353423600</p>
      </section>

    </main>
  )
}