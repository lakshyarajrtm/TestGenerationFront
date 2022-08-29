
<script setup>
import { ref } from 'vue'
import axios from 'axios'


const skill = ref('')
const difficultyLevel = ref(0)
const roleType = ref(0)
const problemStatement = ref('')
const optionA = ref('')
const optionB = ref('')
const optionC = ref('')
const optionD = ref('')
const isActive = ref(0)
const author = ref('')
const answer = ref('')

const url = "https://localhost:7278/Questions/CreateQuestion"

const postQuestion = () =>
{
    let difficulty = 0
    let role = 0
    let active = 0

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
    

    if(document.getElementById('s3').value == '0'){
        active = 0
    }
    else{
        active = 1
    }
    
    console.log(difficultyLevel)
    console.log(role)
    console.log(active)

    axios
        .post(url, {
            Skill : skill.value,
            DifficultyLevel : difficulty,
            RoleType : role,
            ProblemStatement : problemStatement.value,
            Options : [
                optionA.value, optionB.value, optionC.value, optionD.value
            ],
            IsActive : active,
            Author : author.value,
            Answer : answer.value
        },
        {
            headers:
            {
                
                'Content-Type': 'application/json',
                'authorization' : 'Bearer '+ localStorage.getItem('jwt'),
            }
        })
    

    skill.value = ''
    difficultyLevel.value = 0
    roleType.value = 0
    problemStatement.value = ''
    optionA.value = ''
    optionB.value = ''
    optionC.value = ''
    optionD.value = ''
    isActive.value = 0
    author.value = ''
    answer.value = ''

        
    
}

</script>


<template>
<div>
    <div class="add-question">
        <form @submit="postQuestion">
            <label>Skill</label>
            <select v-model="skill" id="s4" required >
                <option value='csharp' selected>C#</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
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
            </select>
            <br/>
            <label id="text-area-label">Problem statement </label><textarea v-model="problemStatement" name="" id="" cols="80" rows="3" required></textarea><br/>

            <label>Options :</label>
            <div class="options">
                <label class="options-label" id="op">A.</label><input type="text" v-model="optionA" class="op" />
                <label class="options-label" id="space">B.</label><input type="text" v-model="optionB"  class="op"/><br/>
                <label class="options-label" id="op">C.</label><input type="text" v-model="optionC" class="op"/> 
                <label class="options-label" id="space">D.</label><input type="text" v-model="optionD" class="op"/><br/><br/>

            </div>
            <label>Is Active</label>
            <select v-model="isActive" id="s3">
                <option value=0>NO</option>
                <option value=1>YES</option>
            </select><br/><br/>
            <label>Answer</label><input type="text" v-model="answer" required /><br/><br/>
            <label>Author</label><input type="text" v-model="author" required /><br/><br/>
            <input class="btn btn1" value="Save Question" type="submit" /> 
        </form>
        
    </div>
    
</div>


</template>

<style>

template{
    background-color: red;
}
textarea{
    resize: both;
    margin-top: 20px;
    border-radius: 10px;
    border:1px solid black;
}
#text-area-label{
    position:relative;
    top:-55px;
}

.btn1{
    width:606px;
    margin-left:200px;
    background-color: #002B5B;
}
.op{
    width:275px;
    margin-right:50px;
}

#op{
    margin-right:10px;
}

#space{
    margin-right:5px;
}

.add-question{

    position: relative;
    background:rgb(229, 229, 229);
    padding:2% 0 2% 10%;
    margin-top:2%;
    border-radius: 5px;
    width:80%;
    left: 10%;
    border: 1px solid rgb(164, 164, 164);
}
#s1{
    width:605px;
    padding:5px;
}

#s2{
    width:605px;
    padding:5px;
}
#s3{
    width:605px;
    padding:5px;
}
#s4{
    width:605px;
    padding:5px;
}
input[type=text]{
    padding:5px;
    border:0px;
    border-radius: 10px;
    box-shadow: black;
    margin-bottom: 5px;
    border:1px solid black;
}

body{
    background-color:rgb(0, 0, 0,.1) ;
}

input:focus{
    outline-color:#5FD068;
}
input{
 width:605px;
 border-radius: 10px;
 padding:5px;
 overflow-wrap: break-word;
 outline-width: 10px;
}
select{
    border-radius: 10px;
    border:1px solid black;
    width:200px;
    text-align: center;
}
.options-label{
    display: inline;
    margin-left: -15px;
    
}
label{
    position: relative;
    top:-5px;
    width: 200px;
    display: inline-block;
    padding-bottom: 10px;
}
.options{
    position: relative;
    top:-30px;
    padding-left: 200px;
}
.link-div{
    position: absolute;
    width: 50px;
    top:15%;
    left:93%;
}

</style>