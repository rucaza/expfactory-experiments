//Reference: The Multi-Source Interference Task: validation study with fMRI in individual subjects, Bush et al.
//Condition records current block (practice/test control/interference), trial_id records stimulus ID (where the target is: left, middle or right) and whether the target is large or small

/* ************************************ */
/* Define helper functions */
/* ************************************ */
function getDisplayElement () {
    $('<div class = display_stage_background></div>').appendTo('body')
    return $('<div class = display_stage></div>').appendTo('body')
}

function evalAttentionChecks() {
  var check_percent = 1
  if (run_attention_checks) {
    var attention_check_trials = jsPsych.data.getTrialsOfType('attention-check')
    var checks_passed = 0
    for (var i = 0; i < attention_check_trials.length; i++) {
      if (attention_check_trials[i].correct === true) {
        checks_passed += 1
      }
    }
    check_percent = checks_passed/attention_check_trials.length
  } 
  return check_percent
}

/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var run_attention_checks = true
var attention_check_thresh = 0.65

// task specific variables
var large_font = 36
var small_font = 20
var practice_control_stimulus = [
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>1</span>xx</div></div>',
	data: { correct_response: 49, trial_id: "large_middle", exp_id: 'multisource', condition: "practice_control"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >x<span class = big>2</span>x</div></div>',
	data: { correct_response: 50, trial_id: "large_right", exp_id: 'multisource', condition: "practice_control"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >xx<span class = big>3</span></div></div>',
	data: { correct_response: 51, trial_id: "small_middle", exp_id: 'multisource', condition: "practice_control"}
  }
]
var practice_interference_stimulus = [
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = big>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "large_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >22<span class = big>1</span></div></div>',
	data: { correct_response: 49, trial_id: "large_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = small>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "small_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >22<span class = small>1</span></div></div>',
	data: { correct_response: 49, trial_id: "small_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >3<span class = big>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "large_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = big>1</span></div></div>',
	data: { correct_response: 49, trial_id: "large_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >3<span class = small>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "small_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = small>1</span></div></div>',
	data: { correct_response: 49, trial_id: "small_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>2</span>11</div></div>',
	data: { correct_response: 50, trial_id: "large_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >11<span class = big>2</span></div></div>',
	data: { correct_response: 50, trial_id: "large_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>2</span>11</div></div>',
	data: { correct_response: 50, trial_id: "small_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >11<span class = small>2</span></div></div>',
	data: { correct_response: 50, trial_id: "small_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>2</span>33</div></div>',
	data: { correct_response: 50, trial_id: "large_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = big>2</span></div></div>',
	data: { correct_response: 50, trial_id: "large_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>2</span>33</div></div>',
	data: { correct_response: 50, trial_id: "small_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = small>2</span></div></div>',
	data: { correct_response: 50, trial_id: "small_right", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>3</span>11</div></div>',
	data: { correct_response: 51, trial_id: "large_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >1<span class = big>3</span>1</div></div>',
	data: { correct_response: 51, trial_id: "large_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>3</span>11</div></div>',
	data: { correct_response: 51, trial_id: "small_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >1<span class = small>3</span>1</div></div>',
	data: { correct_response: 51, trial_id: "small_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>3</span>22</div></div>',
	data: { correct_response: 51, trial_id: "large_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = big>3</span>2</div></div>',
	data: { correct_response: 51, trial_id: "large_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>3</span>22</div></div>',
	data: { correct_response: 51, trial_id: "small_left", exp_id: 'multisource', condition: "practice_interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = small>3</span>2</div></div>',
	data: { correct_response: 51, trial_id: "small_middle", exp_id: 'multisource', condition: "practice_interference"}
  },
 
];

var control_stimulus = [
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>1</span>xx</div></div>',
	data: { correct_response: 49, trial_id: "large_middle", exp_id: 'multisource', condition: "control"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >x<span class = big>2</span>x</div></div>',
	data: { correct_response: 50, trial_id: "large_right", exp_id: 'multisource', condition: "control"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >xx<span class = big>3</span></div></div>',
	data: { correct_response: 51, trial_id: "small_middle", exp_id: 'multisource', condition: "control"}
  }
]
var interference_stimulus = [
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = big>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "large_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >22<span class = big>1</span></div></div>',
	data: { correct_response: 49, trial_id: "large_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = small>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "small_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >22<span class = small>1</span></div></div>',
	data: { correct_response: 49, trial_id: "small_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >3<span class = big>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "large_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = big>1</span></div></div>',
	data: { correct_response: 49, trial_id: "large_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >3<span class = small>1</span>2</div></div>',
	data: { correct_response: 49, trial_id: "small_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = small>1</span></div></div>',
	data: { correct_response: 49, trial_id: "small_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>2</span>11</div></div>',
	data: { correct_response: 50, trial_id: "large_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >11<span class = big>2</span></div></div>',
	data: { correct_response: 50, trial_id: "large_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>2</span>11</div></div>',
	data: { correct_response: 50, trial_id: "small_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >11<span class = small>2</span></div></div>',
	data: { correct_response: 50, trial_id: "small_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>2</span>33</div></div>',
	data: { correct_response: 50, trial_id: "large_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = big>2</span></div></div>',
	data: { correct_response: 50, trial_id: "large_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>2</span>33</div></div>',
	data: { correct_response: 50, trial_id: "small_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >33<span class = small>2</span></div></div>',
	data: { correct_response: 50, trial_id: "small_right", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>3</span>11</div></div>',
	data: { correct_response: 51, trial_id: "large_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >1<span class = big>3</span>1</div></div>',
	data: { correct_response: 51, trial_id: "large_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>3</span>11</div></div>',
	data: { correct_response: 51, trial_id: "small_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >1<span class = small>3</span>1</div></div>',
	data: { correct_response: 51, trial_id: "small_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = big>3</span>22</div></div>',
	data: { correct_response: 51, trial_id: "large_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = big>3</span>2</div></div>',
	data: { correct_response: 51, trial_id: "large_middle", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text ><span class = small>3</span>22</div></div>',
	data: { correct_response: 511, trial_id: "small_left", exp_id: 'multisource', condition: "interference"}
  },
  {
	stimulus: '<div class = centerbox><div class = center-ms-text >2<span class = small>3</span>2</div></div>',
	data: { correct_response: 51, trial_id: "small_middle", exp_id: 'multisource', condition: "interference"}
  },
 
];

var num_blocks = 4 //number of control/interference pairs
var blocks = []
for (var b = 0; b < num_blocks; b++) {
	var control_trials = jsPsych.randomization.repeat(control_stimulus, 8);
	var interference_trials = jsPsych.randomization.shuffle(interference_stimulus);
	blocks.push(control_trials)
	blocks.push(interference_trials)
}

practice_control = jsPsych.randomization.repeat(practice_control_stimulus, 8)
practice_interference = jsPsych.randomization.shuffle(practice_interference_stimulus)
practice_control = practice_control.slice(0,20)
practice_interference = practice_interference.slice(0,20)


var practice_blocks = [practice_control, practice_interference]

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */
// Set up attention check node
var attention_check_block = {
  type: 'attention-check',
  timing_response: 30000,
  response_ends_trial: true,
  timing_post_trial: 200
}

var attention_node = {
  timeline: [attention_check_block],
  conditional_function: function() {
    return run_attention_checks
  }
}

/* define static blocks */
var welcome_block = {
  type: 'poldrack-text',
  timing_response: 60000,
  text: '<div class = centerbox><p class = center-block-text>Welcome to the experiment. Press <strong>enter</strong> to begin.</p></div>',
  cont_key: [13],
  timing_post_trial: 0
};

var instructions_block = {
  type: 'poldrack-instructions',
  pages: [
	'<div class = centerbox><p class = block-text>In this task you will see stimulus consisting of three numbers or "x" letters. For instance, you may see "<span class = big_instructions>1</span>xx" or "<span class = small_instructions>3</span>22"</p><p class = block-text>Two of the characters will always be the same. Your job is to indicate the identity of the character that is different(the target character) using the three number keys. So in the last two examples you would press "1" for the first and "3" for the second.</p></div>',
	'<div class = centerbox><p class = block-text>There are two trial types: either the non-target numbers are also numbers, or they are "x`s". When the non-target characters are "x", the target number will always be big. When all three characters are numbers, the target character can either be larger or smaller than the other characters.</p><p class = block-text>You will complete 8 blocks of trials. Each block will either have only the "x" type trials (e.g. "xx3" type trials) or the number trials (e.g. "[13]1" type trials). It is important that you respond as quickly as possible, but be sure to respond correctly! Respond by reporting <strong>what</strong> the target number was regardless of its position!</p></div>',
	],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 1000
};

var end_block = {
  type: 'poldrack-text',
  timing_response: 60000,
  text: '<div class = centerbox><p class = center-block-text>Thanks for completing this task!</p><p class = center-block-text>Press <strong>enter</strong> to continue.</p></div>',
  cont_key: [13],
  timing_post_trial: 0
};

var start_test_block = {
  type: 'poldrack-text',
  timing_response: 60000,
  text: '<div class = centerbox><p class = center-block-text>Starting test. Press <strong>enter</strong> to begin.</p></div>',
  cont_key: [13],
  timing_post_trial: 1000
};

/* create experiment definition array */
var multisource_experiment = [];
multisource_experiment.push(welcome_block);
multisource_experiment.push(instructions_block);
/* define practice block */
for (var b = 0; b < practice_blocks.length; b++) {
	block = practice_blocks[b]
	var practice_block = {
		type: 'poldrack-single-stim',
		timeline: block,
		is_html: true,
		choices: [49,50,51],
		timing_stim: 1750,
		timing_response: 1750,
		response_ends_trial: false,
		timing_post_trial: 500
	};
	multisource_experiment.push(practice_block)
}

multisource_experiment.push(start_test_block)
/* define test block */
for (var b = 0; b < num_blocks; b++) {
	block = blocks[b]
	var test_block = {
		type: 'poldrack-single-stim',
		timeline: block,
		is_html: true,
		choices: [49,50,51],
		timing_stim: 1750,
		timing_response: 1750,
		response_ends_trial: false,
		timing_post_trial: 500
	};
	multisource_experiment.push(test_block)
	if ($.inArray(b,[0,1,3]) != -1) {
		multisource_experiment.push(attention_node)
	}
}

multisource_experiment.push(end_block)
