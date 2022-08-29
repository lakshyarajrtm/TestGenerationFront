
<template>
<div class="main-div">
    <div class="question-criteria">
        <label>Test Paper Name</label><input type="text" v-model='testPaperName' required/><br/>
        <label>Skill</label>
        <select v-model="skill" id="s3" required>
            <option value="csharp">C#</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
        </select><br/>
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
        <label>Number of Questions</label><input type="text" v-model="numOfQuest" required/><br/><br/>
        <label>Duration: </label>
        <div class="duration" style="display:inline-block">
            <label style="width:30px;position: relative;top:0ex;">Hr</label>
            <input type="text" v-model="DurationHour" style="width:80px" required/>
            <label style="margin-left: 40px;padding-right: 10px;top:0ex;width: 35px;">Min</label>
            <input type="text" v-model="DurationMinute" style="width:80px" required/>
        </div><br/>
        <button id='generate-btn' class="btn btn1" @click="getQuestion" >Get Question</button>
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
const testPaperName = ref('')
const DurationHour = ref('')
const DurationMinute = ref('')

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
    

    window.randomQuestions =  await res.data
    window.testPaperName = testPaperName
    window.DurationHour = DurationHour
    window.DurationMinute = DurationMinute
    
    console.log(randomQuestions)

    router.push('/randomQuestions')
}

</script>

<style>

.question-criteria{

    position: relative;
    background:rgb(229, 229, 229);
    padding:2% 0 2% 10%;
    margin-top:2%;
    border-radius: 5px;
    width:80%;
    left: 10%;
    border: 1px solid rgb(164, 164, 164);
}

#generate-btn{

    width:400px;
    text-align: center;
    position: relative;
    left: 8%;
    top:20px;
}

.link-div{
    position: absolute;
    width: 50px;
    top:15%;
    left:93%;
}

.main-div{
    width: auto;
    height: 750px;
}

</style>