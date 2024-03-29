import React from 'react'

const Hero = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <img src="/images/img 2.jpg"  alt=""  style={{ width: '450px', height:'450px',padding:'left' }}/ >
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">The taste That Makes You Feel Awesome</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-success btn-lg px-4 me-md-2">Sign up</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Login</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
