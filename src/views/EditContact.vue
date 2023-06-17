<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Contact</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quibusdam eum ullam provident assumenda distinctio facere mollitia expedita, officiis esse corrupti ad magni doloremque! Consequuntur, tempore hic. Explicabo, fugit commodi.</p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="PhotoURL">
                    </div>
                    <div class="mb-2">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="number" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="CompanyName">
                    </div>
                    <div class="mb-2">
                        <select class="form-control">
                            <option value="">Select Group</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://img.icons8.com/?size=512&id=108652&format=png" alt="" class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "EditContact"
    }
</script>

<style scoped>
</style>