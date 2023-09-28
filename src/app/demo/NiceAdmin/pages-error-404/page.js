import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <main>
  <div className="container">
    <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>404</h1>
      <h2>The page you are looking for doesnt exist.</h2>
      <a className="btn" href="index.html">Back to home</a>
      <Image
                        src="/path/to/your/image.jpg"
                        alt="Description of the image"
                        width={50} // Specify the desired width
                        height={50} // Specify the desired height
                      />
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </section>
  </div>
</main>{/* End #main */}

    </>
  )
}
