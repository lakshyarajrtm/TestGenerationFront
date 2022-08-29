
<script setup>
import { ref } from 'vue'

var count = 0

const randomQues = ref(window.randomQuestions)
const viewAnswers = ref(false)
const testPaperName = ref(window.testPaperName)
const DurationHour = ref(window.DurationHour)
const DurationMinute = ref(window.DurationMinute)


const resetCounter = () =>
{
    viewAnswers.value = !(viewAnswers.value)
    count = 0
}

const viewAns = () =>
{
    count = count + 1
    return count
}

const printPaper = () =>
{
    var divContents = document.getElementsByClassName("random-questions")[0].innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.write('<style>'+
                    '.random-questions{ margin-left: 100px;padding-bottom: 800px;width:80%;border-left: 1px solid rgb(164, 164, 164);}'+
                    '.test-paper-heading{ text-align: center;font-size: xx-large;}'+
                    '.left-options-div{ margin-top: 10px;margin-left:34px;}'+
                    '.right-options-div{margin-left:34px;}'+
                    '.questions-div{ padding-left : 100px;}'+
                    'label {position: relative;top: -5px;width: 200px;display: inline-block;padding-bottom: 10px;}'+
    '</style>')
    console.log(a.document)
    a.document.close();
    a.print();
}

const printAnswers = () =>
{
    var contents = document.getElementsByClassName("answers");
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body>');
    for(var i = 0; i < contents.length; i++)
    {
        a.document.write((i+1)+')'+contents[i].innerHTML)
    }
    a.document.write('</body></html>');
}


</script>

<template>
    <div>
        <div class="random-questions">
        <div class="test-paper-heading">
            <label style="width:auto"> {{ testPaperName }}</label><br/>
            <label style="font-size: small;font-family: cursive;margin-left: 60%;">Duration {{DurationHour}}hr {{DurationMinute}}min</label>
        </div>
        
        <div v-for="question in randomQues" v-bind:key="question.quesId">
            <div class="questions-div">
                <p class="problem-statement">Q{{ viewAns() }} ) {{ question.problemStatement }}</p>
                

                    <div class="left-options-div">
                        <label class="left-options" v-if="question.options.length >= 1">A. {{ question.options[0] }} </label> 
                        <label class="left-options" v-if="question.options.length >= 3">C. {{ question.options[2] }} </label> 
                    </div>
                    <div class="right-options-div">
                        <label class="right-options" v-if="question.options.length >= 2">B. {{ question.options[1] }} </label>
                        <label class="right-options" v-if="question.options.length >= 4">D. {{ question.options[3] }} </label>
                    </div>
                    <div v-if="viewAnswers" class="answers">
                        Answer: {{ question.answer }}<br/>
                    </div>
                
            </div>
        </div>
        
    </div>
    <div>
        <button id="view-answers" class="btn btn-link" @click="resetCounter()">View Answers</button>
        <button id="print-paper" class="btn btn-link" @click="printPaper()">Print Paper</button>
        <button id="print-answers" class="btn btn-link" @click="printAnswers()">Print Answers</button>
    </div>
    </div>
</template>

<style>

.questions-div
{
    padding-left : 100px;
}

.random-questions
{
    margin-left: 100px;
    padding-bottom: 400px;
    width:80%;
    border-left: 1px solid rgb(164, 164, 164);
}


.left-options-div
{
    margin-top: 10px;
    margin-left:34px;
}

.right-options-div
{
    margin-left:34px;
}

.test-paper-heading
{
    text-align: center;
    font-size: xx-large;
}

#view-answers
{
    position: relative;
    padding-left:120px;
}

</style>