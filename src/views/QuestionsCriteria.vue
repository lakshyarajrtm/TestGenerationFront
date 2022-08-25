
<template>
<div>
    <div class="question-criteria">
        <label>Skill</label><input type="text" v-model="skill"/><br/>
        <label>Difficulty Level</label>
        <select v-model="difficultyLevel" id="s1">
            <option value=0>Easy</option>
            <option value=1>Medium</option>
            <option value=2>Hard</option>
        </select><br/>
        <label>Role type</label>
        <select v-model="roleType" id="s2">
            <option value=0>Junior-Level</option>
            <option value=1>Mid-Level</option>
            <option value=2>Senior-Level</option>
        </select><br/>
        <label>Number of Questions</label><input type="text" v-model="numOfQuest" /><br/><br/>
        <button id = 'generate-btn' class="btn" @click="getQuestion()">Generate Questions</button>
    
    </div>
    <div class="display-question" v-if="displayQuestion">

        <div class="questions-div" v-for="questions in randomQuestions.value" v-bind:key="questions.questionId">
            <p>{{ question.problemStatement }}</p>
            <label>question.options[0]</label>
            <label>question.options[1]</label>
            <label>question.options[2]</label>
            <label>question.options[3]</label>
        </div>
    </div>

</div>


</template>

<script setup>

import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router'

const skill = ref('')
const difficultyLevel = ref(0)
const roleType = ref(0)
const numOfQuest = ref(0)

const randomQuestions = ref([])
const router = useRouter()

const displayQuestion = ref(false)

const url = "https://localhost:7278/Questions/GetQuestions"

const getQuestion = async () => {

    let difficulty = 0
    let role = 0

    if(document.getElementById('s1').value == '0'){
        difficulty = 0
    }
    else
    if(document.getElementById('s1').value == '1'){
        difficulty = 1
    }
    else{
        difficulty = 2
    }

    if(document.getElementById('s2').value == '0'){
        role = 0
    }
    else
    if(document.getElementById('s2').value == '1'){
        role = 1
    }
    else{
        role = 2
    }

    let res = await axios.post(url, {
        skill : skill.value,
        numOfQuestions : numOfQuest.value,
        role : role,
        difficulty : difficulty
    },
    {
        headers:
        {
            'Content-Type': 'application/json',
        }
    })

    if(res.status == 200)
    {
        displayQuestion.value = true;
    } 
    console.log(res)

    window.randomQuestions =  await res.data
    
    console.log(randomQuestions.value)
    console.log(displayQuestion.value)

    router.push('/randomQuestions')
}

</script>

<style>

.question-criteria{
    position: relative;
    background:rgb(0, 0, 0,.5);
    padding:2% 0 2% 10%;
    margin-top:2%;
    border-radius: 5px;
    width:80%;
    left: 10%;
}

#generate-btn{
    width:400px;
    text-align: center;
    position: relative;
    left:28%;
}

</style>