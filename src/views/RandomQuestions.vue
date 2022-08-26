
<script setup>
import { ref } from 'vue'

const count = 1

const randomQues = ref(window.randomQuestions)

const viewAnswers = ref(false)
const testPaperName = ref(window.testPaperName)
const DurationHour = ref(window.DurationHour)
const DurationMinute = ref(window.DurationMinute)

</script>

<template>
    <div class="random-questions">
        <div class="test-paper-heading">
            <label style="width:auto"> {{ testPaperName }}</label><br/>
            <label style="font-size: small;font-family: cursive;margin-left: 60%;">Duration {{DurationHour}}hr {{DurationMinute}}min</label>
        </div>
        <div v-for="question in randomQues" v-bind:key="question.quesId">
            <div class="questions-div">
                <p class="problem-statement">Q{{ count++ }} ) {{ question.problemStatement }}</p>
                

                    <div class="left-options-div">
                        <label class="left-options" v-if="question.options.length >= 1">A. {{ question.options[0] }} </label> 
                        <label class="left-options" v-if="question.options.length >= 3">C. {{ question.options[2] }} </label> 
                    </div>
                    <div class="right-options-div">
                        <label class="right-options" v-if="question.options.length >= 2">B. {{ question.options[1] }} </label>
                        <label class="right-options" v-if="question.options.length >= 4">D. {{ question.options[3] }} </label>
                    </div>
                    <div v-if="viewAnswers">
                        Answer: {{ question.answer }}<br/>
                    </div>
                
            </div>
        </div>
        <button id="view-answers" class="btn btn-link" @click="viewAnswers = !viewAnswers">View Answers</button>
    </div>
</template>

<style>

.questions-div{
    border-radius: 10px;
    
}

.random-questions{
    padding-left: 200px;
    padding-bottom: 800px;
}

.options{
    
}
.left-options-div{
    margin-top: 10px;
    margin-left:34px;
}

.right-options-div{
    margin-left:34px;
}

.test-paper-heading{
    text-align: center;
    font-size: xx-large;
}

#view-answers{

}
</style>