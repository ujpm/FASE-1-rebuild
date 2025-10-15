const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-xl font-bold">FASE-1</h5>
            <p>First Savers - Fast Servers</p>
            <p>
              &quot;FASE-1, we aim to create the next generation of EMTs from
              locals. by providing taining materials, to help in
              emergencies&quot;
            </p>
          </div>
          <div className="md:text-right">
            <div className="flex justify-end space-x-4">
              <a
                href="https://x.com/Uwizeyi30479056"
                className="hover:text-blue-400"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100095161301970&mibextid=ZbWKwL"
                className="hover:text-blue-400"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/_jp_oficiall?igshid=YzljYTk1ODg3Zg=="
                className="hover:text-blue-400"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="mailto:uwizeyimanajp2@gmail.com"
                className="hover:text-blue-400"
              >
                <i className="fas fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;