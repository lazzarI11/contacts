<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam eum ullam provident assumenda distinctio facere mollitia expedita, officiis esse corrupti ad magni doloremque! Consequuntur, tempore hic. Explicabo, fugit commodi.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4"> 
                <img src="https://img.icons8.com/?size=512&id=108652&format=png" alt="" class="contact-img-big">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold"> Name</span></li>
                    <li class="list-group-item">Email: <span class="fw-bold"> Email</span></li>
                    <li class="list-group-item">Mobile: <span class="fw-bold"> Mobile</span></li>
                    <li class="list-group-item">Company: <span class="fw-bold"> Company</span></li>
                    <li class="list-group-item">Title: <span class="fw-bold"> Title</span></li>
                    <li class="list-group-item">Group: <span class="fw-bold"> Group</span></li>
                </ul>
            </div>
        </div>
        <div class="row mt-3">
            <div class="column">
                <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i>Return</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "ViewContact"
    }
</script>

<style scoped>
</style>