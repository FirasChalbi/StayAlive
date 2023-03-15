import React, { useState }  from 'react'
import './Test.css'

function Test() {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionSelect = (event) => {
      setSelectedOption(event.target.value);
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Selected option:", selectedOption);
      // Add your own logic here to handle the submission
    }
  return (
    <div>
    <h3>1. Little interest or pleasure in doing things</h3>
    <form onSubmit={handleSubmit}>
      <label className='quiz-button'>
        <input  type="radio" name="option" value="Paris" onChange={handleOptionSelect} checked={selectedOption === "Paris"} />
        Paris
      </label>
      <label className='quiz-button'>
        <input type="radio" name="option" value="London" onChange={handleOptionSelect} checked={selectedOption === "London"} />
        London
      </label>
      <label className='quiz-button'>
        <input type="radio" name="option" value="Madrid" onChange={handleOptionSelect} checked={selectedOption === "Madrid"} />
        Madrid
      </label>
      <label className='quiz-button'>
        <input type="radio" name="option" value="Berlin" onChange={handleOptionSelect} checked={selectedOption === "Berlin"} />
        Berlin
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default Test


/*
<li id="field_1_5" class="gfield " data-js-reload="field_1_5">
        <label class="gfield_label gform-field-label">1. Little interest or pleasure in doing things
        <span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
        <div class="ginput_container ginput_container_radio">
            <ul class="gfield_radio" id="input_1_5">
                <li class="gchoice gchoice_1_5_0"> 
                <input name="input_5" type="radio" value="0" id="choice_1_5_0" />
                     <label for="choice_1_5_0" id="label_1_5_0" class="gform-field-label gform-field-label--type-inline">Not at all</label></li>
                     <li class="gchoice gchoice_1_5_1"> 
                     <input name="input_5" type="radio" value="1" id="choice_1_5_1" /> 
                     <label for="choice_1_5_1" id="label_1_5_1" class="gform-field-label gform-field-label--type-inline">Several days</label></li>
                     <li class="gchoice gchoice_1_5_2">
                         <input name="input_5" type="radio" value="2" id="choice_1_5_2" /> 
                         <label for="choice_1_5_2" id="label_1_5_2" class="gform-field-label">More than half the days</label></li>
                         <li class="gchoice gchoice_1_5_3"> 
                    <input name="input_5" type="radio" value="3" id="choice_1_5_3" />
                    <label for="choice_1_5_3" id="label_1_5_3" class="gform-field-label gform-field-label--type-inline">Nearly every day</label></li></ul></div></li>
*/