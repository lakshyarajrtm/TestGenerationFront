<template>

<div class="grid h-screen grid-flow-col	 place-items-center">
	<div class="card w-96  bg-blue-700 shadow-xl">
		
		<div class="card-body">
			<h2 class="card-title">Generate Random Questions</h2>
			<p>Generate Random Question Based on criteria provided</p>
			<div class="card-actions justify-end">
				
				<router-link to="/questionsCriteria">OPEN</router-link>
			</div>
		</div>
	</div>
    <div class="card w-96  bg-blue-700 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Add Questions</h2>
            <p>Add questions to the database</p>
            <div class="card-actions justify-end">
                
            <router-link to="/addquestion">OPEN</router-link>
            </div>
        </div>

    </div>

</div>
</template>

<script setup>
//import { useRouter } from 'vue-router';

//const router = useRouter()




</script>