
$(function() {
    
	console.log(" add Receipt ");

	$('#receiptDetContainer').css("display","none");
	
	
	function readURL(input) {

        if (input.files && input.files[0]) {
            
            var reader = new FileReader();
            reader.onload = function (e) {

				var userAgent = navigator.userAgent || navigator.vendor || window.opera;
					if (/android/i.test(userAgent)) {
			        if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
					 	$('#receiptImgNew').css("transform","rotate(90deg)");
					}
			    }

                $('#receiptImgNew').attr('src', e.target.result);
                $('#imageSelect').css("display","block");
            }
            
            reader.readAsDataURL(input.files[0]);
        }
        
    }
    
    $(".clickChoosePic").change(function(){


    	$("#clickIndex").val(this.id.split("_")[1]);
    	var clickedTd = this.closest('tr').id;
    	$("#"+clickedTd).after(" <tr id='uploadTr'><td colspan='3'><div id='imageSelect'><div id='imgCont'><img id='receiptImgNew' src='#' alt='receipt image' /></div><button type='button' class='btn btn-default btn-lg btnWidth usePicBtncls' id=\"usePicBtn\">Use this Picture</button></div></td></tr> ");

    	
        readURL(this);
    });



    $(document).on("click", "#usePicBtn" , function(){
    	$("#oopDetContainer").css("display","none");
		$('#receiptDetContainer').css("display","block");
		$("#uploadTr").remove();
	});


    
  	$( "#submitBtn" ).click(function() { 

  	  var clickedIndexVal = $("#clickIndex").val();
      var expenseAmt = $("#expenseAmount")[0].value;
      var expenseAmtSplit = "$"+expenseAmt.split(" ")[0];
	  $('#amtVal_'+clickedIndexVal).html(expenseAmtSplit);
	  $( "#imageSelect" ).hide();

	  $( "#uploadPicBtn_"+clickedIndexVal ).removeClass( "uploadPicBtnBgColor" ).addClass( "reviewBtnBgColor" );
	  $( "#uploadPicBtn_"+clickedIndexVal ).html("Review");
	  $( "#uploadPicBtn_"+clickedIndexVal ).css("font-weight", "normal");

      $( "#closeUpload_"+clickedIndexVal ).removeClass( "closeColor glyphicon-remove" ).addClass( "tickColor glyphicon-ok" );

      $("#oopDetContainer").css("display","block");
	  $('#receiptDetContainer').css("display","none");
	  
	  $("#clickChoosePic_"+clickedIndexVal).attr('type' , '');
	  $("#clickChoosePic_"+clickedIndexVal).attr('id' , '');

	  $("#clickIndex").val("");

	});

});