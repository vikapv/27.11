<script setup>

</script>

<template>
<div class="container">
    <div class="row mt-4">
        <div class="col-md-5">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select category</option>
                <option value="1">Яблоки</option>
                <option value="2">Яблоки 2</option>
                <option value="3">Яблоки 3</option>
                <option value="3">Яблоки 4</option>
            </select>
        </div>
        <div class="col-md-5">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search bu name...">
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-dark">Reset</button>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
  <div class="col">
    <div class="card">
      <img src="https://greenfermer.pro/wp-content/uploads/2022/04/garden.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Яблоки 1</h5>
        <p class="card-text">1000$</p>
        <p class="card-text">Яблоки</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=ec07f8fd2d0d00b510dea87d9a4aaf58_l-7985106-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Яблоки 2</h5>
        <p class="card-text">1100$</p>
        <p class="card-text">Яблоки</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://storage.delikateska.ru/e/2/ab559f6f-c2f8-4dbd-81e1-c3fcedf51bd0.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Яблоки 3</h5>
        <p class="card-text">1200$</p>
        <p class="card-text">Яблоки</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://artkvartal.ru/media/articles/2021/06/iablochki.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Яблоки 4</h5>
        <p class="card-text">1500$</p>
        <p class="card-text">Яблоки</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>    
    </div>
  </div>
</div>
</div>
</template>