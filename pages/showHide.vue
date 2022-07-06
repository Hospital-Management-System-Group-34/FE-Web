<template>
  <div class="body">
    <Bootstrapjs />
    <div class="container">
      <div class="row">
        <a href="#carouselExampleFade" role="button" data-slide="next">Next</a>
        <a href="#carouselExampleFade" role="button" data-slide="prev">Prev</a>
      </div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    <div class="carousel-item">
      <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<style>
  .body{
    background-color: black;
    height: 100vh;
  }
  .carousel-control-prev-icon, .carousel-control-next-icon {
    height: 200px;
    width: 200px;
    outline: black;
    background-color: black;
    background-size: 100%, 100%;
    border-radius: 50%;
    border: 1px solid black;
}
</style>



