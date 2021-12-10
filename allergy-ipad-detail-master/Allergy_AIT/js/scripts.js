$(function () {
	const sequence = [{
		name: 'Allergy_AIT_Considerations', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
	},{
		name: 'Allergy_AIT_AI', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: 2, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:0,
	},{
		name: 'Allergy_AIT_AI_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo:'previous',
	},{
		name: 'Allergy_AIT_Polysensitised', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 0,
	},{
		name: 'Allergy_AIT_Polysensitised2', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	},{
		name: 'Allergy_AIT_Polysensitised_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	},{
		name: 'Allergy_AIT_Identify', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	},{
		name: 'Allergy_AIT_Identify_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	},{
		name: 'Allergy_AIT_Modify_1', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	},{
		name: 'Allergy_AIT_Modify_2', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 0,
	},{
		name: 'Allergy_AIT_Modify_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	}

	
	];

	$("#center-info-circle").on('click', function(){
		slideTo(1);
	});

	let parentSequence = parseFloat(sequence.length-1);
	console.log(typeof(parentSequence));
	let dosingResponsibleSource;
	let parentSource;

	
	let mandatoryPages = [{
		name: 'PAL_Spec_ResponsibleUse', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+2, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'reference-back',
	},{
		name: 'PAL_Spec_ResponsibleUse_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: parentSequence+1,
	},{
		name: 'PAL_Spec_Dosing_General', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+9, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'reference-back',
	},{
		name: 'PAL_Spec_Dosing_Hospital', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+9, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'reference-back',
	},{
		name: 'PAL_Spec_Dosing_Community', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+9, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'reference-back',
	},{
		name: 'PAL_Spec_Dosing_SR', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+9, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'reference-back',
	},{
		name: 'PAL_Spec_Dosing_Special', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+9, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'reference-back',
	},{
		name: 'PAL_Spec_Dosing_Impairment', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: parentSequence+9, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: parentSequence+7,
	},{
		name: 'PAL_Spec_Dosing_Ref', // ID of the slide as written in parameters.xml
		studyDesign: null, // null if there is no study design assigned to this page, the index of the page to link to if there is a study design
		references: null, // null if there is no reference page assigned to this page, the index of the page to link to if there is a reference page
		backTo: 'previous',
	}];

	for (let k=0;k<mandatoryPages.length;k++) {
		sequence.push(mandatoryPages[k])
	}

	function slideTo(index) {
		swiper.slideTo(index,0,false);
	}

	const swiper = new Swiper('.swiper-container', { //Swiper Initialisation
		on: {
			afterInit: function(swiper){
				createBottomMenu();
				//Get the active Index of the Swiper
				let slideIndex = swiper.activeIndex;
				console.log('SlideIndex:'+slideIndex);
				let slide = sequence[slideIndex];
				console.log("Slide Name:"+slide.name);
				if (slide.studyDesign === null) {
					$('.study-design').off('click')
				} else {
					$(".study-design").on('click', function(){
						slideTo(slide.studyDesign);
					});
				}
				if (slide.references === null) {
					$('.references').off('click')
				} else {
					$(".references").on('click', function(){
						slideTo(slide.references);
					});
				}
				console.log(slide.backTo)
				if (slide.backTo === 'previous') {
					// console.log(sequence[slideIndex].backTo)
					$(".back-button").on('click', function(){
						slideTo(swiper.previousIndex)
					});
				} else if (typeof slide.backTo === 'number') {
					// console.log(sequence[slideIndex].backTo)
					$(".back-button").on('click', function() {
						slideTo(slide.backTo)
					});
				} else {
					$(".back-button").off('click')
				}
				if (window.parent.onEnterPage){
					window.parent.onEnterPage(slide.name);
				}
			},
			slideChange: function () {
				let slideIndex = swiper.activeIndex;
				console.log('SlideIndex:'+slideIndex);
				let slide = sequence[slideIndex];
				createBottomMenu();
				initialise()
				if (window.parent.onEnterPage){
					window.parent.onEnterPage(slide.name);
				}
			}
		},
		preloadImages: false,
		// Enable lazy loading
		lazy: true,
		effect: 'fade', // Effect used when trasitioning between slides
		direction: 'vertical', // The direction which slides transition between eachother
		allowTouchMove: false, // Whether touch based swiping is allowed or not.
		spaceBetween: 0, // pixels between each slide.
		shortSwipes: false, /* Disables swipes that don't swipe a page past the half way point to go to the next page */
		longSwipesMS: 100, /* Minimum time in milliseconds for a swipe to last for it to be able to swipe to another page */
		longSwipesRatio: 0.1, /* Fraction of screen that needs to be swiped in order for it to go to the next page */
	});

	function initialise() {
		let slideIndex = swiper.activeIndex;
		let slide = sequence[slideIndex];
		if (slide.studyDesign === null) {
			$('.study-design').off('click')
		} else {
			$(".study-design").on('click', function(){
				swiper.slideTo(slide.studyDesign,0,false);
			});
		}
		if (slide.references === null) {
			$('.references').off('click')
		} else {
			$(".references").on('click', function(){
				swiper.slideTo(slide.references,0,false);
			});
		}

	}
	
	$(".back-button").on('click', function(){
		let slideIndex = swiper.activeIndex;
		let slide = sequence[slideIndex];
		console.log(slide.backTo);
		if (slide.backTo === 'previous') {
			console.log("Previous Index");
			slideTo(swiper.previousIndex);
		} else if(slide.backTo == 'reference-back'){
			//if this vairable points to its own index then we would use the parent source variable to revert back to the 
			//2nd layer parent source
			if(dosingResponsibleSource != swiper.activeIndex){
				slideTo(dosingResponsibleSource);
			}
			else{
				slideTo(parentSource);
			}
		}else if (typeof slide.backTo === 'number') {
			console.log("Numeric Index");
			slideTo(slide.backTo);
		} else {
			$(".back-button").off('click')
		}
	});

	/* Menu Buttons */

	if (!window.parent.navigateToSequence) {
        window.parent.navigateToSequence = function(name) {
            // We are not in the MI Touch environment
            window.location.href = `../${name}/index.html`
        }
    }
	function createBottomMenu() {
		// AIT Section
		$('.bottom-menu').html(`
		<div class="flex flex-row h-full">
            <div class="sequence" data-prevent-tap="false" style="width:6.5%"></div>
            <div class="home" onclick="window.parent.navigateToSequence('Allergy_Home')" data-prevent-tap="true" style="width:5.2%"></div>
            <div class="ryaltris" onclick="window.parent.navigateToSequence('PAL_Spec_Hosp_Discharge')" data-prevent-tap="true" style="width:5%"></div>
            <div class="acarizax" onclick="window.parent.navigateToSequence('ACA_Acarizax')" data-prevent-tap="true" style="width:5%"></div>
            <div class="grazax" onclick="navigateToSequence('GRA_GPA')" data-prevent-tap="true" style="width:5%"></div>
            <div class="goals" onclick="navigateToSequence('Allergy_Goals')" data-prevent-tap="true" style="width:11.8%"></div>
            <div class="guidelines" onclick="window.parent.navigateToSequence('Allergy_Guidelines')" data-prevent-tap="true" style="width:21%"></div>
            <div class="ait" onclick="window.parent.navigateToSequence('Allergy_AIT')" data-prevent-tap="true" style="width:19.6%"></div>
			<div class="product-information " onclick="window.parent.navigateToSequence('ACA_PI')" data-prevent-tap="true" style="width:9.8%"></div>
            <div class="faq" onclick="window.parent.navigateToSequence('PAL_Spec_Indication')" data-prevent-tap="true" style="width:4.8%"></div>
			<div class="references"  data-prevent-tap="true" style="width:6.4%"></div>
			
		</div>
		`);
	}
	//Responsible and Dosing button click functionality

	$('.responsible-use').on('click', function(){
		//tracks the page index that caused the dosing or responsible page to trigger for back reference
		dosingResponsibleSource = swiper.activeIndex;

		//If dosing or reference page are accessed from the dosing or reference page, the logic would hold the value of the 
		//page causing the trigger now which now would be the dosing or responsible page indices and we would lose the index
		//of the original page

		//This variable only holds the index of pages that triggers dosing and responsible pages that are themselves
		//are not dosing or reference pages
		if(sequence[swiper.activeIndex].backTo != 'reference-back'){
			parentSource = swiper.activeIndex;
		}
		slideTo(parentSequence+1);
	});

	$('.dosing').on('click', function(){
		dosingResponsibleSource = swiper.activeIndex;

		if(sequence[swiper.activeIndex].backTo != 'reference-back'){
			parentSource = swiper.activeIndex;
		}
		slideTo(parentSequence+3);
	});


	$('#navigator').on('click', function(){
		slideTo(1);
	})

	$('#navigator2').on('click', function(){
		slideTo(3);
	})

	$('#navigator3').on('click', function(){
		slideTo(7);
	})

	$('#navigator4').on('click', function(){
		slideTo(8);
	})

	$('#aitRef').on('click', function(){
		slideTo(2);
	})

	$('#polyRef').on('click', function(){
		slideTo(5);
	})

	$('#IdnRef').on('click', function(){
		slideTo(6);
	})

	$('#modRef').on('click', function(){
		slideTo(9);
	})
	
	$('#modRef1').on('click', function(){
		slideTo(9);
	})
	
	$('#polyref1').on('click', function(){
		slideTo(4);
	})
	

	//Dosing tab click functionality

	$('.general-dose').on('click',function(){
		slideTo(parentSequence+3);
	});
	$('.hospital').on('click',function(){
		slideTo(parentSequence+4);
	});
	$('.community').on('click',function(){
		slideTo(parentSequence+5);
	});
	$('.sr').on('click',function(){
		slideTo(parentSequence+6);
	});
	$('.special').on('click',function(){
		slideTo(parentSequence+7);
	});
	$('.impairment').on('click',function(){
		slideTo(parentSequence+8);
	});

	$('#ir-indication').on('click', function(){
		slideTo(1);
	});

	$('#sr-indication').on('click', function(){
		slideTo(2);
	});
});

