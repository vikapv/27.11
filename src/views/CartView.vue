<script setup>

</script>

<template>
<div class="container">
    <div class="row">
        <div class="col">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" class="w-25">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src="https://greenfermer.pro/wp-content/uploads/2022/04/garden.jpg" class="img-thumbnail" alt="..."></td>
      <td>M1</td>
      <td>$100</td>
      <td>
        <input type="number" name="" id="" class="form-control" value="1">
      </td>
      <td>
        <button type="button" class="btn me-2 btn-outline-success mx-4">Detail</button>
        <button type="button" class="btn btn-outline-success mx-4">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    
        </div>
        <div class="row">
            <div class="col text-end">
                <h3 class="text-end">Total:$200</h3>
                <button type="button" class="btn me-2 btn-outline-success btn-lg "><i class="bi bi-cart-check"></i>Bue</button>
            </div>
        </div>
    </div>
</div>
</template>