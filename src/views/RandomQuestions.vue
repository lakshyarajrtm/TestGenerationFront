
<script setup>
import { ref } from 'vue'
const count = 1
const randomQues = ref(window.randomQuestions)
console.log(randomQues.value)
</script>



<template>
    <div class="random-questions">
        <div v-for="question in randomQues" v-bind:key="question.quesId">
            <div class="questions-div">
                <p class="problem-statement">Q{{count++}} ) {{ question.problemStatement }}</p>
                
                    
                    <div class="left-options-div">
                        <label class="left-options" v-if="question.options.length >= 1">A. {{ question.options[0] }} </label> 
                        <label class="left-options" v-if="question.options.length >= 3">C. {{ question.options[2] }} </label> 
                    </div>
                    <div class="right-options-div">
                        <label class="right-options" v-if="question.options.length >= 2">B. {{ question.options[1] }} </label>
                        <label class="right-options" v-if="question.options.length >= 4">D. {{ question.options[3] }} </label>
                    </div>
                
            </div>
        </div>
    </div>
</template>

<style>

.questions-div{
    border-radius: 10px;
}

.options{
    
}
.left-options-div{
    margin-top: 10px;
}

.right-options-div{
    
}
</style>