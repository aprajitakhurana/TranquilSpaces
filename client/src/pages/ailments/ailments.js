import React from 'react';
import  "./styles.css";

class Ailments extends React.Component {
  render(){
    return (
      <div>
        <div class="cardContainer">
         
            <div class="card cardDepression">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Depression</div>
              <div class="content">Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.</div>
            </div>
         
            <div class="card cardAnxiety">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Anxiety</div>
              <div class="content">Anxiety is a feeling of fear, dread, and uneasiness. Anxiety disorders form a category of mental health diagnoses that lead to excessive nervousness, fear, apprehension, and worry.</div>
            </div>
         
            <div class="card cardADHD">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">ADHD</div>
              <div class="content">ADHD is a chronic condition where a has differences in brain development and brain activity that affect attention, the ability to sit still, and self-control.</div>
            </div>
          
            <div class="card cardInsomnia">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Insomnia</div>
              <div class="content"> Insomnia is a common sleep disorder that can make it hard to fall asleep, hard to stay asleep, or cause you to wake up too early and not be able to get back to sleep.</div>
            </div>
       
            <div class="card cardAddiction">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Substance Abuse</div>
              <div class="content">Use of of psychoactive drugs, such as alcohol, pain medications or illegal drugs in amounts or by methods which are harmful to the individual or others.</div>
            </div>
         
            <div class="card cardBipolar">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Bipolar Disorder</div>
              <div class="content">Bipolar disorder, also known as manic depression, is a mental illness that brings severe high and low moods and changes in sleep, energy, thinking, and behavior.</div>
            </div>
        
            <div class="card cardSchizophrenia ">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Schizophrenia</div>
              <div class="content">Schizophrenia is characterised by thoughts or experiences that seem out of touch with reality, disorganised speech or behaviour and decreased participation in daily activities.</div>
            </div>
          
            <div class="card cardPTSD ">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">PTSD </div>
              <div class="content">Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it.</div>
            </div>
          
            <div class="card cardEatingDisorder ">
              <center>
                <div class="icon"></div>
              </center>
              <div class="header">Eating Disorder </div>
              <div class="content">Eating disorders are a range of psychological conditions that cause unhealthy eating habits to develop. They might start with an obsession with food, body weight, or body shape.</div>
            </div>
          
        </div>
      </div>
    );
  }
}

export default Ailments;