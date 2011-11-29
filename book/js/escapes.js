
jQuery(document).ready(function() {
	
	
});

jQuery(function() {

	var title1 = jQuery('#escapeTitle1');
	var title2 = jQuery('#escapeTitle2');
	var title3 = jQuery('#escapeTitle3');
	var title4 = jQuery('#escapeTitle4');
	var title5 = jQuery('#escapeTitle5');
	var title6 = jQuery('#escapeTitle6');
	var title7 = jQuery('#escapeTitle7');
	var title8 = jQuery('#escapeTitle8');
	var title9 = jQuery('#escapeTitle9');
	var title10 = jQuery('#escapeTitle10');
	
	var text1 = jQuery('#escapeText1');
	var text2 = jQuery('#escapeText2');
	var text3 = jQuery('#escapeText3');
	var text4 = jQuery('#escapeText4');
	var text5 = jQuery('#escapeText5');
	var text6 = jQuery('#escapeText6');
	var text7 = jQuery('#escapeText7');
	var text8 = jQuery('#escapeText8');
	var text9 = jQuery('#escapeText9');
	var text10 = jQuery('#escapeText10');
	
	

	
	
	
	
	

	var animating = 'one';

	jQuery('#escapeTitle1').click(function(e) {
		
			title1.removeClass();
			title2.removeClass();
			title3.removeClass();
			title4.removeClass();
			title5.removeClass();
			title6.removeClass();
			title7.removeClass();
			title8.removeClass();
			title9.removeClass();
			title10.removeClass();

			text1.removeClass();
			text2.removeClass();
			text3.removeClass();
			text4.removeClass();
			text5.removeClass();
			text6.removeClass();
			text7.removeClass();
			text8.removeClass();
			text9.removeClass();
			text10.removeClass();
		

		if (animating == 'two') {
			
			title1.addClass('title1active')
			
			title2.addClass('title2down');

			text2.addClass('escdisappear');
			text1.addClass('escappear');
				
		setTimeout(function() {	
			animating = 'one'
		}, 2000);
	
		}
		
		if (animating == 'three') {
			
			title1.addClass('title1active')
			
			title2.addClass('title2downfromup');
			
			title3.addClass('title3down');

			text3.addClass('escdisappear');
			text1.addClass('escappear');
				
		setTimeout(function() {	
			animating = 'one'
		}, 2000);
	
		}
		
		if (animating == 'four') {
			
			title1.addClass('title1active')
			
			title2.addClass('title2downfromup');
			
			title3.addClass('title3downfromup');
			
				title4.addClass('title4down');

			text4.addClass('escdisappear');
			text1.addClass('escappear');
				
		setTimeout(function() {	
			animating = 'one'
		}, 2000);
	
		}
		
			if (animating == 'five') {

				title1.addClass('title1active')

				title2.addClass('title2downfromup');

				title3.addClass('title3downfromup');

					title4.addClass('title4downfromup');
					
					title5.addClass('title5down');

				text5.addClass('escdisappear');
				text1.addClass('escappear');

			setTimeout(function() {	
				animating = 'one'
			}, 2000);

			}
			
				if (animating == 'six') {

					title1.addClass('title1active')

					title2.addClass('title2downfromup');

					title3.addClass('title3downfromup');

						title4.addClass('title4downfromup');

						title5.addClass('title5downfromup');
						
							title6.addClass('title6down');

					text6.addClass('escdisappear');
					text1.addClass('escappear');

				setTimeout(function() {	
					animating = 'one'
				}, 2000);

				}
		
							if (animating == 'seven') {

								title1.addClass('title1active')

								title2.addClass('title2downfromup');

								title3.addClass('title3downfromup');

									title4.addClass('title4downfromup');

									title5.addClass('title5downfromup');

											title6.addClass('title6downfromup');

										title7.addClass('title7down');

								text7.addClass('escdisappear');
								text1.addClass('escappear');

							setTimeout(function() {	
								animating = 'one'
							}, 2000);

							}
							
								if (animating == 'eight') {

									title1.addClass('title1active')

									title2.addClass('title2downfromup');

									title3.addClass('title3downfromup');

										title4.addClass('title4downfromup');

										title5.addClass('title5downfromup');

												title6.addClass('title6downfromup');
												
														title7.addClass('title7downfromup');

											title8.addClass('title8down');

									text8.addClass('escdisappear');
									text1.addClass('escappear');

								setTimeout(function() {	
									animating = 'one'
								}, 2000);

								}
								
								
									if (animating == 'nine') {

										title1.addClass('title1active')

										title2.addClass('title2downfromup');

										title3.addClass('title3downfromup');

											title4.addClass('title4downfromup');

											title5.addClass('title5downfromup');

													title6.addClass('title6downfromup');

															title7.addClass('title7downfromup');
															
															title8.addClass('title8downfromup');

												title9.addClass('title9down');

										text9.addClass('escdisappear');
										text1.addClass('escappear');

									setTimeout(function() {	
										animating = 'one'
									}, 2000);

									}
									
										if (animating == 'ten') {

											title1.addClass('title1active')

											title2.addClass('title2downfromup');

											title3.addClass('title3downfromup');

												title4.addClass('title4downfromup');

												title5.addClass('title5downfromup');

														title6.addClass('title6downfromup');

																title7.addClass('title7downfromup');

																title8.addClass('title8downfromup');
																
																	title9.addClass('title9downfromup');

													title10.addClass('title10down');

											text10.addClass('escdisappear');
											text1.addClass('escappear');

										setTimeout(function() {	
											animating = 'one'
										}, 2000);

										}
	});


	jQuery('#escapeTitle2').click(function(e) {
		
		
		if (animating == 'one') {
			
				title2.removeClass();

				text2.removeClass();
				
		title1.addClass('title1up');
		
		title2.addClass('title2active');
		
		text1.addClass('escdisappear');
		
		text2.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'two'
		}, 2000);
	
		}
		
			if (animating == 'three') {
				
					title2.removeClass();
					title3.removeClass();
				

					text2.removeClass();
					text3.removeClass();
				
			title1.addClass('title1up');	

			title2.addClass('title2activefromup');
			
			title3.addClass('title3down');

			text3.addClass('escdisappear');
			
			text2.addClass('escappear');

			setTimeout(function() {	
				animating = 'two'
			}, 2000);

			}
		
				if (animating == 'four') {
					
						title2.removeClass();
						title3.removeClass();
						title4.removeClass();

						text2.removeClass();
						text3.removeClass();
						text4.removeClass();
					

				title2.addClass('title2activefromup');
				
				title3.addClass('title3downfromup');
				
				title4.addClass('title4down');

				text4.addClass('escdisappear');
				
				text2.addClass('escappear');

				setTimeout(function() {	
					animating = 'two'
				}, 2000);

				}
				
						if (animating == 'five') {
							
								title2.removeClass();
								title3.removeClass();
								title4.removeClass();
								title5.removeClass();
						
								text2.removeClass();
								text3.removeClass();
								text4.removeClass();
								text5.removeClass();
								

						title2.addClass('title2activefromup');

						title3.addClass('title3downfromup');

						title4.addClass('title4downfromup');
						
						title5.addClass('title5down');

						text5.addClass('escdisappear');
						
						text2.addClass('escappear');

						setTimeout(function() {	
							animating = 'two'
						}, 2000);

						}
						
								if (animating == 'six') {
									
										title2.removeClass();
										title3.removeClass();
										title4.removeClass();
										title5.removeClass();
										title6.removeClass();

										text2.removeClass();
										text3.removeClass();
										text4.removeClass();
										text5.removeClass();
										text6.removeClass();
						

								title2.addClass('title2activefromup');

								title3.addClass('title3downfromup');

								title4.addClass('title4downfromup');
								
								title5.addClass('title5downfromup');

								title6.addClass('title6down');

								text6.addClass('escdisappear');
								
								text2.addClass('escappear');

								setTimeout(function() {	
									animating = 'two'
								}, 2000);

								}
								
									if (animating == 'seven') {
										
											title2.removeClass();
											title3.removeClass();
											title4.removeClass();
											title5.removeClass();
											title6.removeClass();
											title7.removeClass();
							

											text2.removeClass();
											text3.removeClass();
											text4.removeClass();
											text5.removeClass();
											text6.removeClass();
											text7.removeClass();
										

									title2.addClass('title2activefromup');

									title3.addClass('title3downfromup');

									title4.addClass('title4downfromup');

									title5.addClass('title5downfromup');
									
									title6.addClass('title6downfromup');

									title7.addClass('title7down');

									text7.addClass('escdisappear');
									
									text2.addClass('escappear');

									setTimeout(function() {	
										animating = 'two'
									}, 2000);

									}
									
											if (animating == 'eight') {
												
													title2.removeClass();
													title3.removeClass();
													title4.removeClass();
													title5.removeClass();
													title6.removeClass();
													title7.removeClass();
													title8.removeClass();
												

													text2.removeClass();
													text3.removeClass();
													text4.removeClass();
													text5.removeClass();
													text6.removeClass();
													text7.removeClass();
													text8.removeClass();
													

											title2.addClass('title2activefromup');

											title3.addClass('title3downfromup');

											title4.addClass('title4downfromup');

											title5.addClass('title5downfromup');

											title6.addClass('title6downfromup');
											
											title7.addClass('title7downfromup');

											title8.addClass('title8down');

											text8.addClass('escdisappear');
											
											text2.addClass('escappear');

											setTimeout(function() {	
												animating = 'two'
											}, 2000);

											}
											
													if (animating == 'nine') {
														
															title2.removeClass();
															title3.removeClass();
															title4.removeClass();
															title5.removeClass();
															title6.removeClass();
															title7.removeClass();
															title8.removeClass();
															title9.removeClass();

															text2.removeClass();
															text3.removeClass();
															text4.removeClass();
															text5.removeClass();
															text6.removeClass();
															text7.removeClass();
															text8.removeClass();
															text9.removeClass();

													title2.addClass('title2activefromup');

													title3.addClass('title3downfromup');

													title4.addClass('title4downfromup');

													title5.addClass('title5downfromup');

													title6.addClass('title6downfromup');

													title7.addClass('title7downfromup');
													
													title8.addClass('title8downfromup');

													title9.addClass('title9down');

													text9.addClass('escdisappear');
													
													text2.addClass('escappear');

													setTimeout(function() {	
														animating = 'two'
													}, 2000);

													}
													
																	if (animating == 'ten') {
																		
																			title2.removeClass();
																			title3.removeClass();
																			title4.removeClass();
																			title5.removeClass();
																			title6.removeClass();
																			title7.removeClass();
																			title8.removeClass();
																			title9.removeClass();
																			title10.removeClass();

																			text2.removeClass();
																			text3.removeClass();
																			text4.removeClass();
																			text5.removeClass();
																			text6.removeClass();
																			text7.removeClass();
																			text8.removeClass();
																			text9.removeClass();
																			text10.removeClass();

																	title2.addClass('title2activefromup');

																	title3.addClass('title3downfromup');

																	title4.addClass('title4downfromup');

																	title5.addClass('title5downfromup');

																	title6.addClass('title6downfromup');

																	title7.addClass('title7downfromup');

																	title8.addClass('title8downfromup');

																	title9.addClass('title9downfromup');

																	title10.addClass('title10down');

																	text10.addClass('escdisappear');
																	
																	text2.addClass('escappear');

																	setTimeout(function() {	
																		animating = 'two'
																	}, 2000);

																	}
		
	});
	
	jQuery('#escapeTitle3').click(function(e) {
		
		
		title3.removeClass();
		text3.removeClass();
		
		
		
		if (animating == 'one') {
			
				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
				title6.removeClass();
				title7.removeClass();
				title8.removeClass();
				title9.removeClass();
				title10.removeClass();

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
				text6.removeClass();
				text7.removeClass();
				text8.removeClass();
				text9.removeClass();
				text10.removeClass();
		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		
		title3.addClass('title3active');
		
		text1.addClass('escdisappear');
		text3.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'three'
		}, 2000);
	
		}
		
			if (animating == 'two') {
				
					title2.removeClass();
					title3.removeClass();
					title4.removeClass();
					title5.removeClass();
					title6.removeClass();
					title7.removeClass();
					title8.removeClass();
					title9.removeClass();
					title10.removeClass();

					text2.removeClass();
					text3.removeClass();
					text4.removeClass();
					text5.removeClass();
					text6.removeClass();
					text7.removeClass();
					text8.removeClass();
					text9.removeClass();
					text10.removeClass();


			title2.addClass('title2upfromactive');

			title3.addClass('title3active');

			text2.addClass('escdisappear');
			text3.addClass('escappear');

			setTimeout(function() {	
				animating = 'three'
			}, 2000);

			}
			
				if (animating == 'four') {
					
						title3.removeClass();
						title4.removeClass();
						title5.removeClass();
						title6.removeClass();
						title7.removeClass();
						title8.removeClass();
						title9.removeClass();
						title10.removeClass();

						text3.removeClass();
						text4.removeClass();
						text5.removeClass();
						text6.removeClass();
						text7.removeClass();
						text8.removeClass();
						text9.removeClass();
						text10.removeClass();

				title4.addClass('title4down');

				title3.addClass('title3activefromup');

				text4.addClass('escdisappear');
				text3.addClass('escappear');

				setTimeout(function() {	
					animating = 'three'
				}, 2000);

				}
				
					if (animating == 'five') {
						
								title4.removeClass();
								title5.removeClass();
								title6.removeClass();
								title7.removeClass();
								title8.removeClass();
								title9.removeClass();
								title10.removeClass();

								text4.removeClass();
								text5.removeClass();
								text6.removeClass();
								text7.removeClass();
								text8.removeClass();
								text9.removeClass();
								text10.removeClass();

					title4.addClass('title4downfromup');
					title5.addClass('title5down');

					title3.addClass('title3activefromup');

					text5.addClass('escdisappear');
					text3.addClass('escappear');

					setTimeout(function() {	
						animating = 'three'
					}, 2000);

					}
					
					
						if (animating == 'six') {
							
								title5.removeClass();
								title6.removeClass();
								title7.removeClass();
								title8.removeClass();
								title9.removeClass();
								title10.removeClass();

								text5.removeClass();
								text6.removeClass();
								text7.removeClass();
								text8.removeClass();
								text9.removeClass();
								text10.removeClass();

								title4.addClass('title4downfromup');
								title5.addClass('title5downfromup');

						title6.addClass('title6down');

						title3.addClass('title3activefromup');

						text6.addClass('escdisappear');
						text3.addClass('escappear');

						setTimeout(function() {	
							animating = 'three'
						}, 2000);

						}
						
							if (animating == 'seven') {

									title6.removeClass();
									title7.removeClass();
									title8.removeClass();
									title9.removeClass();
									title10.removeClass();

									text6.removeClass();
									text7.removeClass();
									text8.removeClass();
									text9.removeClass();
									text10.removeClass();
									
									title4.addClass('title4downfromup');
									title5.addClass('title5downfromup');
									title6.addClass('title6downfromup');
									

							title7.addClass('title7down');

							title3.addClass('title3activefromup');

							text7.addClass('escdisappear');
							text3.addClass('escappear');

							setTimeout(function() {	
								animating = 'three'
							}, 2000);

							}
							
							if (animating == 'eight') {
								
									title7.removeClass();
									title8.removeClass();
									title9.removeClass();
									title10.removeClass();

									text7.removeClass();
									text8.removeClass();
									text9.removeClass();
									text10.removeClass();

									title4.addClass('title4downfromup');
									title5.addClass('title5downfromup');
									title6.addClass('title6downfromup');
									title7.addClass('title7downfromup');


							title8.addClass('title8down');

							title3.addClass('title3activefromup');

							text8.addClass('escdisappear');
							text3.addClass('escappear');

							setTimeout(function() {	
								animating = 'three'
							}, 2000);

							}
							
								if (animating == 'nine') {
									
									
										title8.removeClass();
										title9.removeClass();
										title10.removeClass();

										text8.removeClass();
										text9.removeClass();
										text10.removeClass();
										
										title4.addClass('title4downfromup');
										title5.addClass('title5downfromup');
										title6.addClass('title6downfromup');
										title7.addClass('title7downfromup');
										title8.addClass('title8downfromup');
										
								title9.addClass('title9down');

								title3.addClass('title3activefromup');

								text9.addClass('escdisappear');
								text3.addClass('escappear');

								setTimeout(function() {	
									animating = 'three'
								}, 2000);

								}
								
									if (animating == 'ten') {
										
											title9.removeClass();
											title10.removeClass();

											text9.removeClass();
											text10.removeClass();

											title4.addClass('title4downfromup');
											title5.addClass('title5downfromup');
											title6.addClass('title6downfromup');
											title7.addClass('title7downfromup');
											title8.addClass('title8downfromup');
											title9.addClass('title9downfromup');


									title10.addClass('title10down');

									title3.addClass('title3activefromup');

									text10.addClass('escdisappear');
									text3.addClass('escappear');

									setTimeout(function() {	
										animating = 'three'
									}, 2000);

									}
		
	});
	
	jQuery('#escapeTitle4').click(function(e) {
		
		title4.removeClass();
		text4.removeClass();
		
		if (animating == 'one') {
			
			
				title2.removeClass();
				title3.removeClass();
		

				text2.removeClass();
				text3.removeClass();
			
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		
		title4.addClass('title4active');
		
		text1.addClass('escdisappear');
		text4.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'four'
		}, 2000);
	
		}
		
		if (animating == 'two') {
		
				title2.removeClass();
				title3.removeClass();
			

				text2.removeClass();
				text3.removeClass();
			
		
		title2.addClass('title2upfromactive');
		title3.addClass('title3up');
		
		title4.addClass('title4active');
		
		text2.addClass('escdisappear');
		text4.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'four'
		}, 2000);
	
		}
		
		if (animating == 'three') {
		
					title3.removeClass();
				

					text3.removeClass();
				
		
		title3.addClass('title3upfromactive');
		
		title4.addClass('title4active');
		
		text3.addClass('escdisappear');
		text4.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'four'
		}, 2000);
	
		}
		
		if (animating == 'five') {

					title5.removeClass();
		
					text5.removeClass();
				
				
		title4.addClass('title4activefromup');
		
		title5.addClass('title5down');
		
		text5.addClass('escdisappear');
		text4.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'four'
		}, 2000);
	
		}
		
			if (animating == 'six') {

						title5.removeClass();
						title6.removeClass();
					

						text5.removeClass();
						text6.removeClass();
					

			title4.addClass('title4activefromup');

			title5.addClass('title5downfromup');
			title6.addClass('title6down');

			text6.addClass('escdisappear');
			text4.addClass('escappear');

			setTimeout(function() {	
				animating = 'four'
			}, 2000);

			}
			
					if (animating == 'seven') {

								title5.removeClass();
								title6.removeClass();
								title7.removeClass();
					

								text5.removeClass();
								text6.removeClass();
								text7.removeClass();
						

					title4.addClass('title4activefromup');

					title5.addClass('title5downfromup');
					title6.addClass('title6downfromup');
					title7.addClass('title7down');

					text7.addClass('escdisappear');
					text4.addClass('escappear');

					setTimeout(function() {	
						animating = 'four'
					}, 2000);

					}
					
							if (animating == 'eight') {
								
										title5.removeClass();
										title6.removeClass();
										title7.removeClass();
										title8.removeClass();
								
										text5.removeClass();
										text6.removeClass();
										text7.removeClass();
										text8.removeClass();
										

							title4.addClass('title4activefromup');

							title5.addClass('title5downfromup');
							title6.addClass('title6downfromup');
							title7.addClass('title7downfromup');
							title8.addClass('title8down');

							text8.addClass('escdisappear');
							text4.addClass('escappear');

							setTimeout(function() {	
								animating = 'four'
							}, 2000);

							}
							
							
									if (animating == 'nine') {
										
												title5.removeClass();
												title6.removeClass();
												title7.removeClass();
												title8.removeClass();
												title9.removeClass();
								

										
												text5.removeClass();
												text6.removeClass();
												text7.removeClass();
												text8.removeClass();
												text9.removeClass();
										


									title4.addClass('title4activefromup');

									title5.addClass('title5downfromup');
									title6.addClass('title6downfromup');
									title7.addClass('title7downfromup');
									title8.addClass('title8downfromup');
									title9.addClass('title9down');

									text9.addClass('escdisappear');
									text4.addClass('escappear');

									setTimeout(function() {	
										animating = 'four'
									}, 2000);

									}
									
										if (animating == 'ten') {
											
												
													title5.removeClass();
													title6.removeClass();
													title7.removeClass();
													title8.removeClass();
													title9.removeClass();
													title10.removeClass();

													text5.removeClass();
													text6.removeClass();
													text7.removeClass();
													text8.removeClass();
													text9.removeClass();
													text10.removeClass();


										title4.addClass('title4activefromup');

										title5.addClass('title5downfromup');
										title6.addClass('title6downfromup');
										title7.addClass('title7downfromup');
										title8.addClass('title8downfromup');
										title9.addClass('title9downfromup');
										title10.addClass('title10down');

										text10.addClass('escdisappear');
										text4.addClass('escappear');

										setTimeout(function() {	
											animating = 'four'
										}, 2000);

										}
		
	});
	
	jQuery('#escapeTitle5').click(function(e) {
		
		title5.removeClass();
		text5.removeClass();
		
		if (animating == 'one') {
			
			
				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
			

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
			
		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');
		
		title5.addClass('title5active');
		
		text1.addClass('escdisappear');
		text5.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'five'
		}, 2000);
	
		}
		
			if (animating == 'two') {
				
				
					title2.removeClass();
					title3.removeClass();
					title4.removeClass();
			

					text2.removeClass();
					text3.removeClass();
					text4.removeClass();
		

			title2.addClass('title2upfromactive');
			title3.addClass('title3up');
			title4.addClass('title4up');

			title5.addClass('title5active');

			text2.addClass('escdisappear');
			text5.addClass('escappear');

			setTimeout(function() {	
				animating = 'five'
			}, 2000);

			}
			
				if (animating == 'three') {


						title3.removeClass();
						title4.removeClass();
			

						text3.removeClass();
						text4.removeClass();
			

				title3.addClass('title3upfromactive');
				title4.addClass('title4up');

				title5.addClass('title5active');

				text3.addClass('escdisappear');
				text5.addClass('escappear');

				setTimeout(function() {	
					animating = 'five'
				}, 2000);

				}
				
						if (animating == 'four') {
							
							
								title4.removeClass();
						
								text4.removeClass();
						


						title4.addClass('title4upfromactive');

						title5.addClass('title5active');

						text4.addClass('escdisappear');
						text5.addClass('escappear');

						setTimeout(function() {	
							animating = 'five'
						}, 2000);

						}
						
						
								if (animating == 'six') {
									
									
									
										title6.removeClass();
									

										text6.removeClass();
									


								title6.addClass('title6down');

								title5.addClass('title5activefromup');

								text6.addClass('escdisappear');
								text5.addClass('escappear');

								setTimeout(function() {	
									animating = 'five'
								}, 2000);

								}
								
									if (animating == 'seven') {
										
										
									
											title6.removeClass();
											title7.removeClass();
								

											text6.removeClass();
											text7.removeClass();
										

									title6.addClass('title6downfromup');
									title7.addClass('title7down');

									title5.addClass('title5activefromup');

									text7.addClass('escdisappear');
									text5.addClass('escappear');

									setTimeout(function() {	
										animating = 'five'
									}, 2000);

									}
									
									if (animating == 'eight') {
										
										
										
											title6.removeClass();
											title7.removeClass();
											title8.removeClass();
								

								
											text6.removeClass();
											text7.removeClass();
											text8.removeClass();
									

									title6.addClass('title6downfromup');
									title7.addClass('title7downfromup');
									title8.addClass('title8down');

									title5.addClass('title5activefromup');

									text8.addClass('escdisappear');
									text5.addClass('escappear');

									setTimeout(function() {	
										animating = 'five'
									}, 2000);

									}
									
										if (animating == 'nine') {
											
											
										
												title6.removeClass();
												title7.removeClass();
												title8.removeClass();
												title9.removeClass();

											
												text6.removeClass();
												text7.removeClass();
												text8.removeClass();
												text9.removeClass();

										title6.addClass('title6downfromup');
										title7.addClass('title7downfromup');
										title8.addClass('title8downfromup');
										title9.addClass('title9down');

										title5.addClass('title5activefromup');

										text9.addClass('escdisappear');
										text5.addClass('escappear');

										setTimeout(function() {	
											animating = 'five'
										}, 2000);

										}
										
											if (animating == 'ten') {
												
										
													title6.removeClass();
													title7.removeClass();
													title8.removeClass();
													title9.removeClass();
													title10.removeClass();

													text6.removeClass();
													text7.removeClass();
													text8.removeClass();
													text9.removeClass();
													text10.removeClass();

											title6.addClass('title6downfromup');
											title7.addClass('title7downfromup');
											title8.addClass('title8downfromup');
											title9.addClass('title9downfromup');
											title10.addClass('title10down');

											title5.addClass('title5activefromup');

											text10.addClass('escdisappear');
											text5.addClass('escappear');

											setTimeout(function() {	
												animating = 'five'
											}, 2000);

											}
		
	});
	
	jQuery('#escapeTitle6').click(function(e) {
		
		
			title6.removeClass();
	
			text6.removeClass();

		
		if (animating == 'one') {
				
			text1.removeClass();
			title1.removeClass();
			text2.removeClass();
			title2.removeClass();
			text3.removeClass();
			title3.removeClass();
			text4.removeClass();
			title4.removeClass();
			text5.removeClass();
			title5.removeClass();
	
		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');
		title5.addClass('title5up');
		
		title6.addClass('title6active');
		
		text1.addClass('escdisappear');
		text6.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'six'
		}, 2000);
	
		}
		
			if (animating == 'two') {
				
					title2.removeClass();
					title3.removeClass();
					title4.removeClass();
					title5.removeClass();


					text2.removeClass();
					text3.removeClass();
					text4.removeClass();
					text5.removeClass();
			

			title2.addClass('title2upfromactive');
			title3.addClass('title3up');
			title4.addClass('title4up');
			title5.addClass('title5up');

			title6.addClass('title6active');

			text2.addClass('escdisappear');
			text6.addClass('escappear');

			setTimeout(function() {	
				animating = 'six'
			}, 2000);

			}
		
				if (animating == 'three') {
					
						title2.removeClass();
						title3.removeClass();
						title4.removeClass();
						title5.removeClass();


						text2.removeClass();
						text3.removeClass();
						text4.removeClass();
						text5.removeClass();

				title3.addClass('title3upfromactive');
				title4.addClass('title4up');
				title5.addClass('title5up');

				title6.addClass('title6active');

				text3.addClass('escdisappear');
				text6.addClass('escappear');

				setTimeout(function() {	
					animating = 'six'
				}, 2000);

				}
				
					if (animating == 'four') {
						
							title2.removeClass();
							title3.removeClass();
							title4.removeClass();
							title5.removeClass();


							text2.removeClass();
							text3.removeClass();
							text4.removeClass();
							text5.removeClass();

					title4.addClass('title4upfromactive');
					title5.addClass('title5up');

					title6.addClass('title6active');

					text4.addClass('escdisappear');
					text6.addClass('escappear');

					setTimeout(function() {	
						animating = 'six'
					}, 2000);

					}
					
					if (animating == 'five') {
						
							title2.removeClass();
							title3.removeClass();
							title4.removeClass();
							title5.removeClass();


							text2.removeClass();
							text3.removeClass();
							text4.removeClass();
							text5.removeClass();

					title5.addClass('title5upfromactive');

					title6.addClass('title6active');

					text5.addClass('escdisappear');
					text6.addClass('escappear');

					setTimeout(function() {	
						animating = 'six'
					}, 2000);

					}
					
						if (animating == 'seven') {
							
				
							title7.removeClass();
						
							text7.removeClass();
						

						title6.addClass('title6activefromup');
						
						title7.addClass('title7down');

						text7.addClass('escdisappear');
						text6.addClass('escappear');

						setTimeout(function() {	
							animating = 'six'
						}, 2000);

						}
						
							if (animating == 'eight') {
								
							
								title7.removeClass();
								title8.removeClass();
							

								text7.removeClass();
								text8.removeClass();


							title6.addClass('title6activefromup');

							title7.addClass('title7downfromup');
							title8.addClass('title8down');

							text8.addClass('escdisappear');
							text6.addClass('escappear');

							setTimeout(function() {	
								animating = 'six'
							}, 2000);

							}
							
							if (animating == 'nine') {
								
					
								title7.removeClass();
								title8.removeClass();
								title9.removeClass();
							

						
								text7.removeClass();
								text8.removeClass();
								text9.removeClass();

							title6.addClass('title6activefromup');

							title7.addClass('title7downfromup');
							title8.addClass('title8downfromup');
							title9.addClass('title9down');

							text9.addClass('escdisappear');
							text6.addClass('escappear');

							setTimeout(function() {	
								animating = 'six'
							}, 2000);

							}
							
								if (animating == 'ten') {


									title7.removeClass();
									title8.removeClass();
									title9.removeClass();
									title10.removeClass();
								
									text7.removeClass();
									text8.removeClass();
									text9.removeClass();
									text10.removeClass();
									
								title6.addClass('title6activefromup');

								title7.addClass('title7downfromup');
								title8.addClass('title8downfromup');
								title9.addClass('title9downfromup');
								title10.addClass('title10down');

								text10.addClass('escdisappear');
								text6.addClass('escappear');

								setTimeout(function() {	
									animating = 'six'
								}, 2000);

								}
	});
	
	jQuery('#escapeTitle7').click(function(e) {
		
		
			title7.removeClass();
	

			text7.removeClass();
		
		
		if (animating == 'one') {
			
				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
				title6.removeClass();
	

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
				text6.removeClass();

		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');
		title5.addClass('title5up');
		title6.addClass('title6up');
				
		title7.addClass('title7active');
		
		text1.addClass('escdisappear');
		text7.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'seven'
		}, 2000);
	
		}
		
		if (animating == 'two') {
		
				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
				title6.removeClass();
	

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
				text6.removeClass();
		
		title2.addClass('title2upfromactive');
		title3.addClass('title3up');
		title4.addClass('title4up');
		title5.addClass('title5up');
		title6.addClass('title6up');
				
		title7.addClass('title7active');
		
		text2.addClass('escdisappear');
		text7.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'seven'
		}, 2000);
	
		}
		
			if (animating == 'three') {

					title3.removeClass();
					title4.removeClass();
					title5.removeClass();
					title6.removeClass();

					text3.removeClass();
					text4.removeClass();
					text5.removeClass();
					text6.removeClass();

			title3.addClass('title3upfromactive');
			title4.addClass('title4up');
			title5.addClass('title5up');
			title6.addClass('title6up');

			title7.addClass('title7active');

			text3.addClass('escdisappear');
			text7.addClass('escappear');

			setTimeout(function() {	
				animating = 'seven'
			}, 2000);

			}
			
				if (animating == 'four') {
		
						title4.removeClass();
						title5.removeClass();
						title6.removeClass();


						text4.removeClass();
						text5.removeClass();
						text6.removeClass();

				title4.addClass('title4upfromactive');
				title5.addClass('title5up');
				title6.addClass('title6up');

				title7.addClass('title7active');

				text4.addClass('escdisappear');
				text7.addClass('escappear');

				setTimeout(function() {	
					animating = 'seven'
				}, 2000);

				}
				
					if (animating == 'five') {

				
							title5.removeClass();
							title6.removeClass();


							text5.removeClass();
							text6.removeClass();
							
					title5.addClass('title5upfromactive');
					title6.addClass('title6up');

					title7.addClass('title7active');

					text5.addClass('escdisappear');
					text7.addClass('escappear');

					setTimeout(function() {	
						animating = 'seven'
					}, 2000);

					}
					
						if (animating == 'six') {

							
								title6.removeClass();


						
								text6.removeClass();
								
						title6.addClass('title6upfromactive');

						title7.addClass('title7active');

						text6.addClass('escdisappear');
						text7.addClass('escappear');

						setTimeout(function() {	
							animating = 'seven'
						}, 2000);

						}
							if (animating == 'eight') {

							
								title8.removeClass();
					
								text8.removeClass();
							

							title7.addClass('title7activefromup');
							
							title8.addClass('title8down');

							text8.addClass('escdisappear');
							text7.addClass('escappear');

							setTimeout(function() {	
								animating = 'seven'
							}, 2000);

							}
							
								if (animating == 'nine') {

							
									title8.removeClass();
									title9.removeClass();

								
									text8.removeClass();
									text9.removeClass();

								title7.addClass('title7activefromup');

								title8.addClass('title8downfromup');
								title9.addClass('title9down');

								text9.addClass('escdisappear');
								text7.addClass('escappear');

								setTimeout(function() {	
									animating = 'seven'
								}, 2000);

								}
								
									if (animating == 'ten') {

								
										title8.removeClass();
										title9.removeClass();
										title10.removeClass();

										text8.removeClass();
										text9.removeClass();
										text10.removeClass();

									title7.addClass('title7activefromup');

									title8.addClass('title8downfromup');
									title9.addClass('title9downfromup');
									title10.addClass('title10down');

									text10.addClass('escdisappear');
									text7.addClass('escappear');

									setTimeout(function() {	
										animating = 'seven'
									}, 2000);

									}
		
		
	});
	
	jQuery('#escapeTitle8').click(function(e) {
		
			title8.removeClass();
	
			text8.removeClass();
	
		
		if (animating == 'one') {
			
			title2.removeClass();
			title3.removeClass();
			title4.removeClass();
			title5.removeClass();
			title6.removeClass();
			title7.removeClass();
	

			text2.removeClass();
			text3.removeClass();
			text4.removeClass();
			text5.removeClass();
			text6.removeClass();
			text7.removeClass();
		
		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');	
		title5.addClass('title5up');
		title6.addClass('title6up');
		title7.addClass('title7up');
		
		title8.addClass('title8active');
		
		text1.addClass('escdisappear');
		text8.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'eight'
		}, 2000);
	
		}
		
			if (animating == 'two') {

				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
				title6.removeClass();
				title7.removeClass();
	

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
				text6.removeClass();
				text7.removeClass();
			

			title2.addClass('title2upfromactive');
			title3.addClass('title3up');
			title4.addClass('title4up');	
			title5.addClass('title5up');
			title6.addClass('title6up');
			title7.addClass('title7up');

			title8.addClass('title8active');

			text2.addClass('escdisappear');
			text8.addClass('escappear');

			setTimeout(function() {	
				animating = 'eight'
			}, 2000);

			}
			
				if (animating == 'three') {

		
					title3.removeClass();
					title4.removeClass();
					title5.removeClass();
					title6.removeClass();
					title7.removeClass();
		

					text3.removeClass();
					text4.removeClass();
					text5.removeClass();
					text6.removeClass();
					text7.removeClass();
			

				title3.addClass('title3upfromactive');
				title4.addClass('title4up');	
				title5.addClass('title5up');
				title6.addClass('title6up');
				title7.addClass('title7up');

				title8.addClass('title8active');

				text3.addClass('escdisappear');
				text8.addClass('escappear');

				setTimeout(function() {	
					animating = 'eight'
				}, 2000);

				}
				
					if (animating == 'four') {
						
					
						title4.removeClass();
						title5.removeClass();
						title6.removeClass();
						title7.removeClass();
			
						text4.removeClass();
						text5.removeClass();
						text6.removeClass();
						text7.removeClass();
			


					title4.addClass('title4upfromactive');	
					title5.addClass('title5up');
					title6.addClass('title6up');
					title7.addClass('title7up');

					title8.addClass('title8active');

					text4.addClass('escdisappear');
					text8.addClass('escappear');

					setTimeout(function() {	
						animating = 'eight'
					}, 2000);

					}
					
						if (animating == 'five') {

						
							title5.removeClass();
							title6.removeClass();
							title7.removeClass();
				
							text5.removeClass();
							text6.removeClass();
							text7.removeClass();
					

						title5.addClass('title5upfromactive');
						title6.addClass('title6up');
						title7.addClass('title7up');

						title8.addClass('title8active');

						text5.addClass('escdisappear');
						text8.addClass('escappear');

						setTimeout(function() {	
							animating = 'eight'
						}, 2000);

						}
						
							if (animating == 'six') {

						
								title6.removeClass();
								title7.removeClass();
						

								text6.removeClass();
								text7.removeClass();
						

							title6.addClass('title6upfromactive');
							title7.addClass('title7up');

							title8.addClass('title8active');

							text6.addClass('escdisappear');
							text8.addClass('escappear');

							setTimeout(function() {	
								animating = 'eight'
							}, 2000);

							}
							
								if (animating == 'seven') {

					
									title7.removeClass();

									text7.removeClass();
								

								title7.addClass('title7upfromactive');

								title8.addClass('title8active');

								text7.addClass('escdisappear');
								text8.addClass('escappear');

								setTimeout(function() {	
									animating = 'eight'
								}, 2000);

								}
								
										if (animating == 'nine') {
										
											title9.removeClass();

											text9.removeClass();

										title9.addClass('title9down');

										title8.addClass('title8activefromup');

										text9.addClass('escdisappear');
										text8.addClass('escappear');

										setTimeout(function() {	
											animating = 'eight'
										}, 2000);

										}
										
											if (animating == 'ten') {
										
												title9.removeClass();
												title10.removeClass();

												text9.removeClass();
												text10.removeClass();

											title9.addClass('title9downfromup');
											title10.addClass('title10down');

											title8.addClass('title8activefromup');

											text9.addClass('escdisappear');
											text8.addClass('escappear');

											setTimeout(function() {	
												animating = 'eight'
											}, 2000);

											}
		
	});
	
	jQuery('#escapeTitle9').click(function(e) {
		
		
			title9.removeClass();

		
			text9.removeClass();
		
		if (animating == 'one') {
			
				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
				title6.removeClass();
				title7.removeClass();
				title8.removeClass();
	

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
				text6.removeClass();
				text7.removeClass();
				text8.removeClass();
		
		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');	
		title5.addClass('title5up');
		title6.addClass('title6up');
		title7.addClass('title7up');
		title8.addClass('title8up');
		
		title9.addClass('title9active');
		
		text1.addClass('escdisappear');
		text9.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'nine'
		}, 2000);
	
		}
		
			if (animating == 'two') {

					title2.removeClass();
					title3.removeClass();
					title4.removeClass();
					title5.removeClass();
					title6.removeClass();
					title7.removeClass();
					title8.removeClass();
				

					text2.removeClass();
					text3.removeClass();
					text4.removeClass();
					text5.removeClass();
					text6.removeClass();
					text7.removeClass();
					text8.removeClass();
				

			title2.addClass('title2upfromactive');
			title3.addClass('title3up');
			title4.addClass('title4up');	
			title5.addClass('title5up');
			title6.addClass('title6up');
			title7.addClass('title7up');
			title8.addClass('title8up');

			title9.addClass('title9active');

			text2.addClass('escdisappear');
			text9.addClass('escappear');

			setTimeout(function() {	
				animating = 'nine'
			}, 2000);

			}
			
				if (animating == 'three') {
					
						title3.removeClass();
						title4.removeClass();
						title5.removeClass();
						title6.removeClass();
						title7.removeClass();
						title8.removeClass();
			

						text3.removeClass();
						text4.removeClass();
						text5.removeClass();
						text6.removeClass();
						text7.removeClass();
						text8.removeClass();
					


				title3.addClass('title3upfromactive');
				title4.addClass('title4up');	
				title5.addClass('title5up');
				title6.addClass('title6up');
				title7.addClass('title7up');
				title8.addClass('title8up');

				title9.addClass('title9active');

				text3.addClass('escdisappear');
				text9.addClass('escappear');

				setTimeout(function() {	
					animating = 'nine'
				}, 2000);

				}
				
					if (animating == 'four') {
				
							title4.removeClass();
							title5.removeClass();
							title6.removeClass();
							title7.removeClass();
							title8.removeClass();
						

				
							text4.removeClass();
							text5.removeClass();
							text6.removeClass();
							text7.removeClass();
							text8.removeClass();
					


					title4.addClass('title4upfromactive');	
					title5.addClass('title5up');
					title6.addClass('title6up');
					title7.addClass('title7up');
					title8.addClass('title8up');

					title9.addClass('title9active');

					text4.addClass('escdisappear');
					text9.addClass('escappear');

					setTimeout(function() {	
						animating = 'nine'
					}, 2000);

					}
					
						if (animating == 'five') {

								title5.removeClass();
								title6.removeClass();
								title7.removeClass();
								title8.removeClass();
							

								text5.removeClass();
								text6.removeClass();
								text7.removeClass();
								text8.removeClass();
							

						title5.addClass('title5upfromactive');
						title6.addClass('title6up');
						title7.addClass('title7up');
						title8.addClass('title8up');

						title9.addClass('title9active');

						text5.addClass('escdisappear');
						text9.addClass('escappear');

						setTimeout(function() {	
							animating = 'nine'
						}, 2000);

						}
						
							if (animating == 'six') {

									title6.removeClass();
									title7.removeClass();
									title8.removeClass();
								
									text6.removeClass();
									text7.removeClass();
									text8.removeClass();
								

							title6.addClass('title6upfromactive');
							title7.addClass('title7up');
							title8.addClass('title8up');

							title9.addClass('title9active');

							text6.addClass('escdisappear');
							text9.addClass('escappear');

							setTimeout(function() {	
								animating = 'nine'
							}, 2000);

							}
							
								if (animating == 'seven') {
									
										title7.removeClass();
										title8.removeClass();

										text7.removeClass();
										text8.removeClass();
								


								title7.addClass('title7upfromactive');
								title8.addClass('title8up');

								title9.addClass('title9active');

								text7.addClass('escdisappear');
								text9.addClass('escappear');

								setTimeout(function() {	
									animating = 'nine'
								}, 2000);

								}
								
									if (animating == 'eight') {
										
									
											title8.removeClass();
										
											text8.removeClass();
									


									title8.addClass('title8upfromactive');

									title9.addClass('title9active');

									text8.addClass('escdisappear');
									text9.addClass('escappear');

									setTimeout(function() {	
										animating = 'nine'
									}, 2000);

									}
									
										if (animating == 'ten') {
										
												title10.removeClass();

												text10.removeClass();


										title10.addClass('title10down');

										title9.addClass('title9activefromup');

										text10.addClass('escdisappear');
										text9.addClass('escappear');

										setTimeout(function() {	
											animating = 'nine'
										}, 2000);

										}
		
	});
	
	jQuery('#escapeTitle10').click(function(e) {
		
		
			title10.removeClass();

		
			text10.removeClass();
		
		if (animating == 'one') {
			
				title2.removeClass();
				title3.removeClass();
				title4.removeClass();
				title5.removeClass();
				title6.removeClass();
				title7.removeClass();
				title8.removeClass();
				title9.removeClass();

				text2.removeClass();
				text3.removeClass();
				text4.removeClass();
				text5.removeClass();
				text6.removeClass();
				text7.removeClass();
				text8.removeClass();
				text9.removeClass();
		
		title1.addClass('title1up');
		
		title2.addClass('title2up');
		title3.addClass('title3up');
		title4.addClass('title4up');	
		title5.addClass('title5up');
		title6.addClass('title6up');
		title7.addClass('title7up');
		title8.addClass('title8up');
		title9.addClass('title9up');
		
		title10.addClass('title10active')
		
		text1.addClass('escdisappear');
		text10.addClass('escappear');
		
		setTimeout(function() {	
			animating = 'ten'
		}, 2000);
	
		}
		
			if (animating == 'two') {
				
				
					title2.removeClass();
					title3.removeClass();
					title4.removeClass();
					title5.removeClass();
					title6.removeClass();
					title7.removeClass();
					title8.removeClass();
					title9.removeClass();


					text2.removeClass();
					text3.removeClass();
					text4.removeClass();
					text5.removeClass();
					text6.removeClass();
					text7.removeClass();
					text8.removeClass();
					text9.removeClass();


			title2.addClass('title2up');
			title3.addClass('title3up');
			title4.addClass('title4up');	
			title5.addClass('title5up');
			title6.addClass('title6up');
			title7.addClass('title7up');
			title8.addClass('title8up');
			title9.addClass('title9up');

			title10.addClass('title10active')

			text2.addClass('escdisappear');
			text10.addClass('escappear');

			setTimeout(function() {	
				animating = 'ten'
			}, 2000);

			}
			
				if (animating == 'three') {
					
					
						title3.removeClass();
						title4.removeClass();
						title5.removeClass();
						title6.removeClass();
						title7.removeClass();
						title8.removeClass();
						title9.removeClass();

						text3.removeClass();
						text4.removeClass();
						text5.removeClass();
						text6.removeClass();
						text7.removeClass();
						text8.removeClass();
						text9.removeClass();

				title3.addClass('title3up');
				title4.addClass('title4up');	
				title5.addClass('title5up');
				title6.addClass('title6up');
				title7.addClass('title7up');
				title8.addClass('title8up');
				title9.addClass('title9up');

				title10.addClass('title10active')

				text3.addClass('escdisappear');
				text10.addClass('escappear');

				setTimeout(function() {	
					animating = 'ten'
				}, 2000);

				}
				
					if (animating == 'four') {
						
						
							title4.removeClass();
							title5.removeClass();
							title6.removeClass();
							title7.removeClass();
							title8.removeClass();
							title9.removeClass();

							text4.removeClass();
							text5.removeClass();
							text6.removeClass();
							text7.removeClass();
							text8.removeClass();
							text9.removeClass();

					title4.addClass('title4up');	
					title5.addClass('title5up');
					title6.addClass('title6up');
					title7.addClass('title7up');
					title8.addClass('title8up');
					title9.addClass('title9up');

					title10.addClass('title10active')

					text4.addClass('escdisappear');
					text10.addClass('escappear');

					setTimeout(function() {	
						animating = 'ten'
					}, 2000);

					}
					
						if (animating == 'five') {
							
							
								title5.removeClass();
								title6.removeClass();
								title7.removeClass();
								title8.removeClass();
								title9.removeClass();

								text5.removeClass();
								text6.removeClass();
								text7.removeClass();
								text8.removeClass();
								text9.removeClass();

						title5.addClass('title5up');
						title6.addClass('title6up');
						title7.addClass('title7up');
						title8.addClass('title8up');
						title9.addClass('title9up');

						title10.addClass('title10active')

						text5.addClass('escdisappear');
						text10.addClass('escappear');

						setTimeout(function() {	
							animating = 'ten'
						}, 2000);

						}
						
							if (animating == 'six') {
				
									title6.removeClass();
									title7.removeClass();
									title8.removeClass();
									title9.removeClass();

									text6.removeClass();
									text7.removeClass();
									text8.removeClass();
									text9.removeClass();

							title6.addClass('title6up');
							title7.addClass('title7up');
							title8.addClass('title8up');
							title9.addClass('title9up');

							title10.addClass('title10active')

							text6.addClass('escdisappear');
							text10.addClass('escappear');

							setTimeout(function() {	
								animating = 'ten'
							}, 2000);

							}
							
								if (animating == 'seven') {
								
										title7.removeClass();
										title8.removeClass();
										title9.removeClass();

										text7.removeClass();
										text8.removeClass();
										text9.removeClass();

								title7.addClass('title7up');
								title8.addClass('title8up');
								title9.addClass('title9up');

								title10.addClass('title10active')

								text7.addClass('escdisappear');
								text10.addClass('escappear');

								setTimeout(function() {	
									animating = 'ten'
								}, 2000);

								}
								
									if (animating == 'eight') {
										
										
									
											title8.removeClass();
											title9.removeClass();

									
											text8.removeClass();
											text9.removeClass();

									title8.addClass('title8up');
									title9.addClass('title9up');

									title10.addClass('title10active')

									text8.addClass('escdisappear');
									text10.addClass('escappear');

									setTimeout(function() {	
										animating = 'ten'
									}, 2000);

									}
									
										if (animating == 'nine') {
											
											
										
												title9.removeClass();

												text9.removeClass();

										title9.addClass('title9up');

										title10.addClass('title10active')

										text9.addClass('escdisappear');
										text10.addClass('escappear');

										setTimeout(function() {	
											animating = 'ten'
										}, 2000);

										}
		
	});
	
	

});

