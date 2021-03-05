/*--------------------------------------------------------------
 Copyright (C) pixelemu.com
 License: http://www.pixelemu.com/license.html PixelEmu Proprietary Use License
 Website: http://www.pixelemu.com
 Support: info@pixelemu.com
 ---------------------------------------------------------------*/

(function ($) {

	"use strict";

	   function postTitleCheckValues(){
		    $( '#tc_seo input.post-titles' ).each( function( index, element ){
			    if(!$(this).val()) {
			    	$(this).addClass("error");
			    } else {
			    	$(this).removeClass("error");
			    }
		    });
	   };
		   
	/* -------------------------------------------------------- */
	/* READY state                                              */
	/* -------------------------------------------------------- */

	$(document).ready(function(){
		
		// GDPR
	    if( $('#_tc_gdpr_method').val() == '1') {
	        $('.cmb2-id--tc-gdpr-plugin').show();
	    }
	    if( $('#_tc_gdpr_method').val() == '0') {
            $('.cmb2-id--tc-terms-and-conditions').show();
            $('.cmb2-id--tc-terms-and-conditions-page').show();
            $('.cmb2-id--tc-privacy-policy').show();
            $('.cmb2-id--tc-privacy-policy-page').show();
            $('.cmb2-id--tc-gdpr').show();
            $('.cmb2-id--tc-gdpr-information').show();
	    }
	    $('#_tc_gdpr_method').bind('change', function (e) {
	        if( $('#_tc_gdpr_method').val() == '1') {
	            $('.cmb2-id--tc-gdpr-plugin').show();
	        } else{
	           $('.cmb2-id--tc-gdpr-plugin').hide();
	        }        
	        
	        if( $('#_tc_gdpr_method').val() == '0') {
	            $('.cmb2-id--tc-terms-and-conditions').show();
	            $('.cmb2-id--tc-terms-and-conditions-page').show();
	            $('.cmb2-id--tc-privacy-policy').show();
	            $('.cmb2-id--tc-privacy-policy-page').show();
	            $('.cmb2-id--tc-gdpr').show();
	            $('.cmb2-id--tc-gdpr-information').show();
	        }
	        else{
	            $('.cmb2-id--tc-terms-and-conditions').hide();
	            $('.cmb2-id--tc-terms-and-conditions-page').hide();
	            $('.cmb2-id--tc-privacy-policy').hide();
	            $('.cmb2-id--tc-privacy-policy-page').hide();
	            $('.cmb2-id--tc-gdpr').hide();
	            $('.cmb2-id--tc-gdpr-information').hide();
	        } 
	    });
	    
	    // SEO - show/hide additional field
	    if( $('#_tc_seo_expired_ad').val() == '1') {
	        $('.cmb2-id--tc-seo-expired-ad-redirect-url').show();
	    }
	    $('#_tc_seo_expired_ad').bind('change', function (e) {
	        if( $('#_tc_seo_expired_ad').val() == '1') {
	            $('.cmb2-id--tc-seo-expired-ad-redirect-url').show();
	        } else {
	           $('.cmb2-id--tc-seo-expired-ad-redirect-url').hide();
	        }
	    });
	    
	    // SEO and Security - mark empty page select fields
	    postTitleCheckValues();
	    $( "input#find-posts-submit" ).click(function() {
	    	window.setTimeout( postTitleCheckValues, 300 );
    	});
	    $( "#tc_seo .post-titles-container .clear-field" ).click(function() {
	    	$(this).siblings(".post-titles").addClass("error");
    	});
	    // set page fields in SEO tab required
	    $( "#tc_seo input.post-titles" ).attr("required", "required");
	    
	    // sell type - show/hide additional field
	    if( $('#_tc_use_selling_types2').is(':checked')) {
	        $('.cmb2-id--tc-selling-types').show();
	    }
        $(".cmb2-id--tc-use-selling-types input").click(function(){
	        if($(this).attr('id') == '_tc_use_selling_types2') {
	            $('.cmb2-id--tc-selling-types').show();
	        } else {
	           $('.cmb2-id--tc-selling-types').hide();
	        }
        });
        
	    // locations - show/hide additional fields
	    if( $('#_tc_use_locations2').is(':checked')) {
	        $('.cmb-row.location-fields').show();
	    }
        $(".cmb2-id--tc-use-locations input").click(function(){
	        if($(this).attr('id') == '_tc_use_locations2') {
	            $('.cmb-row.location-fields').show();
	        } else {
	           $('.cmb-row.location-fields').hide();
	        }
        });
		
		//Monetizing - show/hide additional fields - Start
		
		$('.cmb2-id--tc-monetizing-payment-methods-title div h3').append('<span class="_tc_monetizing_payment_methods_settings_chevron"><i class="fas fa-chevron-down"></i></span>');
		$('.cmb2-id--tc-monetizing-charging-options-title div h3').append('<span class="_tc_monetizing_charging_options_settings_chevron"><i class="fas fa-chevron-down"></i></span>');
		$('.tc_monetizing_charging_for_adding_ads_price_per_category div h3').prepend('<span class="_tc_monetizing_charging_for_adding_ads_price_per_category_settings_chevron"><i class="fas fa-chevron-down"></i></span>');
		
		$('.cmb2-id--tc-monetizing-offline-payment-title').click(function(){
			$('.cmb2-id--tc-monetizing-offline-payment-title p').toggle();
			if( $('#_tc_monetizing_use_offline_payment2').is(':checked')) {
				$('._tc_monetizing_offline_payment_settings_item').toggle();
			}else{
				$('.cmb2-id--tc-monetizing-use-offline-payment').toggle();
			}
			
		});
		
		$('.cmb2-id--tc-monetizing-paypal-payment-title').click(function(){
			$('.cmb2-id--tc-monetizing-paypal-payment-title p').toggle();
			if( $('#_tc_monetizing_use_paypal_payment2').is(':checked')) {
				$('._tc_monetizing_paypal_payment_settings_item').toggle();
			}else{
				$('.cmb2-id--tc-monetizing-use-paypal-payment').toggle();
			}
		});
		
		$('.cmb2-id--tc-monetizing-vat-rate-title').click(function(){
			$('._tc_monetizing_vat_rate_settings_item').toggle();
		});
		
		
		if( $('#_tc_monetizing_use_offline_payment2').is(':checked')) {
	        $('div.cmb2-id--tc-monetizing-use-offline-payment-information').show();
			$('div.cmb2-id--tc-monetizing-offline-payment-logo').show();
	    }else{
			$('div.cmb2-id--tc-monetizing-use-offline-payment-information').hide();
			$('div.cmb2-id--tc-monetizing-offline-payment-logo').hide();
		}
		
		$(".cmb2-id--tc-monetizing-use-offline-payment input").click(function(){
			if($(this).attr('id') == '_tc_monetizing_use_offline_payment1') {
				$('div.cmb2-id--tc-monetizing-use-offline-payment-information').hide();
				$('div.cmb2-id--tc-monetizing-offline-payment-logo').hide();				
			}else{
				$('div.cmb2-id--tc-monetizing-use-offline-payment-information').show();
				$('div.cmb2-id--tc-monetizing-offline-payment-logo').show();
			}
		});
		
		if( $('#_tc_monetizing_use_paypal_payment2').is(':checked')) {
	        $('.cmb2-id--tc-monetizing-paypal-payment-business-email-id').show();		
			$('.cmb2-id--tc-monetizing-paypal-payment-test-mode').show();
			$('.cmb2-id--tc-monetizing-paypal-payment-currency-code').show();
			$('.cmb2-id--tc-monetizing-paypal-payment-return-successful-url').show();
			$('.cmb2-id--tc-monetizing-paypal-payment-return-cancel-url').show();
			$('.cmb2-id--tc-monetizing-paypal-payment-return-notify-url').show();
			$('.cmb2-id--tc-monetizing-paypal-payment-sumbit-button').show();
			$('.cmb2-id--tc-monetizing-paypal-payment-logo').show();
	    }else{
			$('.cmb2-id--tc-monetizing-paypal-payment-business-email-id').hide();		
			$('.cmb2-id--tc-monetizing-paypal-payment-test-mode').hide();
			$('.cmb2-id--tc-monetizing-paypal-payment-currency-code').hide();
			$('.cmb2-id--tc-monetizing-paypal-payment-return-successful-url').hide();
			$('.cmb2-id--tc-monetizing-paypal-payment-return-cancel-url').hide();
			$('.cmb2-id--tc-monetizing-paypal-payment-return-notify-url').hide();
			$('.cmb2-id--tc-monetizing-paypal-payment-sumbit-button').hide();
			$('.cmb2-id--tc-monetizing-paypal-payment-logo').hide();	
		}
		
		$(".cmb2-id--tc-monetizing-use-paypal-payment input").click(function(){
			if($(this).attr('id') == '_tc_monetizing_use_paypal_payment1') {
				$('.cmb2-id--tc-monetizing-paypal-payment-business-email-id').hide();		
				$('.cmb2-id--tc-monetizing-paypal-payment-test-mode').hide();
				$('.cmb2-id--tc-monetizing-paypal-payment-currency-code').hide();
				$('.cmb2-id--tc-monetizing-paypal-payment-return-successful-url').hide();
				$('.cmb2-id--tc-monetizing-paypal-payment-return-cancel-url').hide();
				$('.cmb2-id--tc-monetizing-paypal-payment-return-notify-url').hide();
				$('.cmb2-id--tc-monetizing-paypal-payment-sumbit-button').hide();
				$('.cmb2-id--tc-monetizing-paypal-payment-logo').hide();
			}else{
				$('.cmb2-id--tc-monetizing-paypal-payment-business-email-id').show();		
				$('.cmb2-id--tc-monetizing-paypal-payment-test-mode').show();
				$('.cmb2-id--tc-monetizing-paypal-payment-currency-code').show();
				$('.cmb2-id--tc-monetizing-paypal-payment-return-successful-url').show();
				$('.cmb2-id--tc-monetizing-paypal-payment-return-cancel-url').show();
				$('.cmb2-id--tc-monetizing-paypal-payment-return-notify-url').show();
				$('.cmb2-id--tc-monetizing-paypal-payment-sumbit-button').show();
				$('.cmb2-id--tc-monetizing-paypal-payment-logo').show();
			}
		});
		
		if ($(".cmb2-id--tc-monetizing-charging-for-adding-ads-price input").click(function() {
			if($(this).attr('id') == '_tc_monetizing_charging_for_adding_ads_price2') {
				$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").show();
				$('.tc_monetizing_charging_for_adding_ads_price_category_div').hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category').hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').hide();
			}else if($(this).attr('id') == '_tc_monetizing_charging_for_adding_ads_price1') {
				$('#_tc_monetizing_charging_for_adding_ads_price_fixed').val(0);
				$('.tc_monetizing_charging_for_adding_ads_price_per_category').show();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category_input input').each(function() {
					$(this).val('');
				});
				$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').hide();
				$('span._tc_monetizing_charging_for_adding_ads_price_per_category_settings_chevron').each(function() {
					$(this).html('<i class="fas fa-chevron-down"></i>')
				});
				$('.tc_monetizing_charging_for_adding_ads_price_per_category').each(function() {
					$(this).find('p').hide();
				});
			}else{
				$('#_tc_monetizing_charging_for_adding_ads_price_fixed').val(0);
				$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category').hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').hide();
			}
		}));
			
		if( $('#_tc_monetizing_charging_for_adding_ads_price1').is(':checked')) {
			$('.tc_monetizing_charging_for_adding_ads_price_category_div').show();
			$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").hide();
			$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').show();
			$('.tc_monetizing_charging_for_adding_ads_price_per_category').show();
		}
		
		if( $('#_tc_monetizing_charging_for_adding_ads_price2').is(':checked')) {
			$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").show();
			$('.tc_monetizing_charging_for_adding_ads_price_category_div').hide();
			$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').hide();
			$('.tc_monetizing_charging_for_adding_ads_price_per_category').hide();
		}
		
		if( $('#_tc_monetizing_charging_for_adding_ads_price3').is(':checked')) {
			$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").hide();
			$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').hide();
			$('.tc_monetizing_charging_for_adding_ads_price_per_category').hide();
		}
		
		$('.tc_monetizing_charging_for_adding_ads_price_per_category').on('click', function() {
			var id = $(this).find('h3').data('id');
			$(this).find('p').toggle();
			$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price-per-category-renew-price-'+id).toggle();
			$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price-per-category-charging-price-'+id).toggle();
			var div_hidden = $('.cmb2-id--tc-monetizing-charging-for-adding-ads-price-per-category-renew-price-'+id).is(':hidden');
			if (div_hidden) {
				$('#-tc-monetizing-charging-for-adding-ads-price-per-category-'+id+'-title span._tc_monetizing_charging_for_adding_ads_price_per_category_settings_chevron').html('<i class="fas fa-chevron-down"></i>');
			}else{
				$('#-tc-monetizing-charging-for-adding-ads-price-per-category-'+id+'-title span._tc_monetizing_charging_for_adding_ads_price_per_category_settings_chevron').html('<i class="fas fa-chevron-up"></i>');
			}
		})
		
		var payment_methods_close = false;
		$('#-tc-monetizing-payment-methods-title').on('click', function() {
			payment_methods_close = !payment_methods_close;
			if (payment_methods_close) {
				$('span._tc_monetizing_payment_methods_settings_chevron').html('<i class="fas fa-chevron-down"></i>');
			}else{
				$('span._tc_monetizing_payment_methods_settings_chevron').html('<i class="fas fa-chevron-up"></i>');
			}
			$('.cmb2-id--tc-monetizing-offline-payment-title').toggle();
			$('.cmb2-id--tc-monetizing-paypal-payment-title').toggle();
			$('.cmb2-id--tc-monetizing-vat-rate-title').toggle();
			
			if( $('#_tc_monetizing_use_offline_payment2').is(':checked')) {
				$('._tc_monetizing_offline_payment_settings_item').toggle();
			}else{
				$('.cmb2-id--tc-monetizing-use-offline-payment').toggle();
			}
			
			if( $('#_tc_monetizing_use_paypal_payment2').is(':checked')) {
				$('._tc_monetizing_paypal_payment_settings_item').toggle();
			}else{
				$('.cmb2-id--tc-monetizing-use-paypal-payment').toggle();
			}
			
			$('._tc_monetizing_vat_rate_settings_item').toggle();
		});
		
		var charging_options_close = true;
		$('#-tc-monetizing-charging-options-title').on('click', function() {
			charging_options_close = !charging_options_close;
			if (charging_options_close) {
				$('span._tc_monetizing_charging_options_settings_chevron').html('<i class="fas fa-chevron-down"></i>');
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title').hide();
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price').hide();
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title p').hide();
				charging_for_adding_ads_title_close = false;
			}else{
				$('span._tc_monetizing_charging_options_settings_chevron').html('<i class="fas fa-chevron-up"></i>');
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title').show();
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price').show();
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title p').show();
			}
			
			if( $('#_tc_monetizing_charging_for_adding_ads_price1').is(':checked')) {
				if (charging_options_close) {
					$('.tc_monetizing_charging_for_adding_ads_price_per_category').hide();
					$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').each(function() {
						$(this).hide();
					});
					
					$('.tc_monetizing_charging_for_adding_ads_price_per_category').each(function() {
						var id = $(this).find('h3').data('id');
						$('#-tc-monetizing-charging-for-adding-ads-price-per-category-'+id+'-title span._tc_monetizing_charging_for_adding_ads_price_per_category_settings_chevron').html('<i class="fas fa-chevron-down"></i>');
						$(this).find('p').hide();
					});
				}else{
					$('.tc_monetizing_charging_for_adding_ads_price_per_category').show();
				}
			}
		
			if( $('#_tc_monetizing_charging_for_adding_ads_price2').is(':checked')) {
				if (charging_options_close) {
					$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed').hide();
				}else{
					$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed').show();
				}
			}
			
		});
		
		var charging_for_adding_ads_title_close = false;
		$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title').on('click', function() {
			charging_for_adding_ads_title_close = !charging_for_adding_ads_title_close;
			if (charging_for_adding_ads_title_close) {
				$('.tc_monetizing_charging_for_adding_ads_price_per_category').hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category').each(function() {
					var id = $(this).find('h3').data('id');
					$('#-tc-monetizing-charging-for-adding-ads-price-per-category-'+id+'-title span._tc_monetizing_charging_for_adding_ads_price_per_category_settings_chevron').html('<i class="fas fa-chevron-down"></i>');
					$(this).find('p').hide();
				});
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price').hide();
				$(this).find('p').hide();
				$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").hide();
				$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').hide();
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price').hide();
				$(this).find('p').hide();
				$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").hide();
			}else{
				
				$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price').show();
				$(this).find('p').show();
				if( $('#_tc_monetizing_charging_for_adding_ads_price1').is(':checked')) {
					$('.tc_monetizing_charging_for_adding_ads_price_per_category').show();
				}
				
				if( $('#_tc_monetizing_charging_for_adding_ads_price2').is(':checked')) {
					$(".cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed").show();
				}
			}
		});
		
		$('#-tc-monetizing-payment-methods-title').trigger('click');
		
		$('.tc_monetizing_charging_for_adding_ads_price_per_category_input').each(function() {
			$(this).hide();
		});
		
		$('.tc_monetizing_charging_for_adding_ads_price_per_category').each(function() {
			$(this).hide();
			$(this).find('p').hide();
		});
		
		$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title').hide();
		$('.cmb2-id--tc-monetizing-charging-for-adding-ads-title p').hide();
		$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price').hide();
		$('.cmb2-id--tc-monetizing-charging-for-adding-ads-price-fixed').hide();
	    
	    // only for advert edit view
		if($("body").hasClass("post-type-classified")){
			// locations show
			$( ".cmb2-id--tc-locations > .cmb-td" ).prepend( "<span class='tcf-clear-locations'><div class='dashicons dashicons-no'></div> <strong>Clear all locations</strong></span>" );
			$( ".tcf-clear-locations" ).click(function() {
				$( ".cmb2-id--tc-locations > .cmb-td li" ).attr('style','');
				$( ".cmb2-id--tc-locations > .cmb-td .cmb2-indented-hierarchy" ).attr('style','');
				$( ".cmb2-id--tc-locations > .cmb-td li" ).removeClass("clicked");
				$(".cmb2-id--tc-locations input").attr('checked', false);
			});
			$( ".cmb2-id--tc-locations > .cmb-td ul li" ).click(function() {
				$( this ).children("input").attr('checked', true);
				if($( this ).next(".cmb2-indented-hierarchy").length > 0) {
					if($( this ).hasClass("clicked")){
						$( this ).siblings().hide(300);
						$( this ).siblings("li").show(300);
						$( this ).removeClass("clicked");
					} else {
					  $( this ).addClass("clicked");
					  $( this ).siblings().hide(300);
					  $( this ).next(".cmb2-indented-hierarchy").show(300);
					}
				}
				$('.cmb2-id--tc-locations .cmb-th').removeClass("error");
			});
			
			// locations tree expanded if advert has already location set
			if($( ".cmb2-id--tc-locations ul.cmb2-list li input[type=radio]:checked" ).length > 0){
				$('.cmb2-id--tc-locations ul.cmb2-list li input[type=radio]:checked').parents("ul").show();
				$('.cmb2-id--tc-locations ul.cmb2-list li input[type=radio]:checked').parents("ul").siblings().hide();
				$('.cmb2-id--tc-locations ul.cmb2-list li input[type=radio]:checked').parents("ul").prev().show().addClass("clicked");
			}
		}
		
		// 'Show category on the archive page' select/unselect
		$( ".cmb2-id--tc-show-cat ul li:first-child" ).children().click(function() {
		  $( ".cmb2-id--tc-show-cat ul li input" ).prop( "checked", false );
		  $( ".cmb2-id--tc-show-cat ul li:first-child input" ).prop( "checked", true );
		});
		$( ".cmb2-id--tc-show-cat ul li + li" ).children().click(function() {
		  $( ".cmb2-id--tc-show-cat ul li:first-child input" ).prop( "checked", false );
		});

	});
	/* -------------------------------------------------------- */
	/* end READY state                                          */
	/* -------------------------------------------------------- */
})(jQuery);
