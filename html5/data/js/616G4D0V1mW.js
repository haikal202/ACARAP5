window.globalProvideData('slide', '{"title":"Pulau-pulau kecil di sekitar Jakarta dikenal dengan nama Kepulauan Seribu","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":11,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide11","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":15,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"616G4D0V1mW","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6C3M9h3tZkH.64pKekD0SJv.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6C3M9h3tZkH.60IDuj4MQ8j.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6qQOwHJwr2a"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6ak46ZRrSyW.InvalidPromptSlide"}}]}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6BYE9z3bUpO.5bJphpBZgfp"}}]},"ReviewInt_6C3M9h3tZkH":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6C3M9h3tZkH.64pKekD0SJv"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6C3M9h3tZkH.60IDuj4MQ8j"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6qQOwHJwr2a.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C3M9h3tZkH_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C3M9h3tZkH_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6C3M9h3tZkH","typea":"var","valueb":"6bhDDDtwVzV","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6bhDDDtwVzV.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6C3M9h3tZkH"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6bhDDDtwVzV.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6C3M9h3tZkH"}]}]}]},"ReviewIntCorrectIncorrect_6C3M9h3tZkH":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6C3M9h3tZkH.64pKekD0SJv.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C3M9h3tZkH.64pKekD0SJv"}}]},{"kind":"adjustvar","variable":"6C3M9h3tZkH.64pKekD0SJv._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6C3M9h3tZkH.64pKekD0SJv._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6C3M9h3tZkH.64pKekD0SJv._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6C3M9h3tZkH.64pKekD0SJv.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6C3M9h3tZkH.64pKekD0SJv"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6C3M9h3tZkH.60IDuj4MQ8j"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6C3M9h3tZkH":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6C3M9h3tZkH"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6C3M9h3tZkH":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6C3M9h3tZkH.64pKekD0SJv.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6C3M9h3tZkH.60IDuj4MQ8j.ActGrpSetDisabledState"}]},"6C3M9h3tZkH_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6qQOwHJwr2a.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6bhDDDtwVzV.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6C3M9h3tZkH"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6qQOwHJwr2a.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6qQOwHJwr2a.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6C3M9h3tZkH"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_616G4D0V1mW":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_616G4D0V1mW":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_616G4D0V1mW"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6C3M9h3tZkH","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6C3M9h3tZkH","typea":"var","valueb":"6bhDDDtwVzV","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6bhDDDtwVzV"},"completed_slide_ref":{"type":"string","value":"_player.6BYE9z3bUpO.66Y5s864Ni1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6C3M9h3tZkH","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6C3M9h3tZkH","typea":"var","valueb":"6bhDDDtwVzV","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6bhDDDtwVzV"},"completed_slide_ref":{"type":"string","value":"_player.6BYE9z3bUpO.66Y5s864Ni1"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_616G4D0V1mW"}]}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ak46ZRrSyW","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ak46ZRrSyW","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6bhDDDtwVzV_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6bhDDDtwVzV_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6bhDDDtwVzV_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6C3M9h3tZkH"}]},{"kind":"showtimer","id":"_player.6bhDDDtwVzV_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6C3M9h3tZkH","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6C3M9h3tZkH"}],"elseActions":[{"kind":"exe_actiongroup","id":"6C3M9h3tZkH_CheckAnswered"}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C3M9h3tZkH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C3M9h3tZkH.60IDuj4MQ8j"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6C3M9h3tZkH.64pKekD0SJv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gLfnGCx9q2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6KJW9NQXue1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YzLneVeKxd"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":312,"contentheight":90,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5Uv7fuWBXV4_-450152768","id":"01","linkId":"txt__default_60IDuj4MQ8j","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":225,"height":21,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"False","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":81,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":20}}}],"shapemaskId":"","xPos":24,"yPos":45,"tabIndex":3,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":22.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":0,"yPos":0,"width":288,"height":45,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}}],"width":288,"height":45,"resume":true,"useHandCursor":true,"id":"60IDuj4MQ8j","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.64pKekD0SJv.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.64pKekD0SJv._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.64pKekD0SJv"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5Zqfl5fBbhl_436333022","id":"01","linkId":"txt__default_64pKekD0SJv","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":225,"height":21,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"True","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":4,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":78,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":21}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":2,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":22.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":0,"yPos":0,"width":288,"height":45,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":93}},"html5data":{"xPos":-9,"yPos":-1,"width":297,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":93}},"html5data":{"xPos":-9,"yPos":-1,"width":297,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":94}},"html5data":{"xPos":-9,"yPos":-1,"width":297,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":94}},"html5data":{"xPos":-9,"yPos":-1,"width":297,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":90}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":91}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":288,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":92}},"html5data":{"xPos":-1,"yPos":-1,"width":289,"height":46,"strokewidth":3}}}],"width":288,"height":45,"resume":true,"useHandCursor":true,"id":"64pKekD0SJv","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.60IDuj4MQ8j.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.60IDuj4MQ8j._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.60IDuj4MQ8j"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":48,"yPos":254,"tabIndex":1,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":107,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":288,"height":214,"strokewidth":0}},"width":312,"height":214,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":312,"bottom":214,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":88}}},"id":"6C3M9h3tZkH"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6gLfnGCx9q2_1428014548","id":"01","linkId":"txt__default_6gLfnGCx9q2","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":460,"height":105,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Pulau-pulau kecil di sekitar Jakarta dikenal dengan nama Kepulauan Seribu","style":{"fontIsBold":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.465}}],"style":{"flowDirection":"leftToRight","trailingMargin":0,"lineSpacing":21,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":73,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":449,"bottom":111,"pngfb":false,"pr":{"l":"Lib","i":96}}}],"shapemaskId":"","xPos":40,"yPos":118,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":240,"rotateYPos":57.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":480,"bottom":115,"altText":"Pulau-pulau kecil di sekitar Jakarta dikenal dengan nama Kepulauan Seribu","pngfb":false,"pr":{"l":"Lib","i":95}},"html5data":{"xPos":0,"yPos":0,"width":480,"height":115,"strokewidth":0}},"width":480,"height":115,"resume":true,"useHandCursor":true,"id":"6gLfnGCx9q2"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/5gAaFfn4w2c_80_DX124_DY124.swf","type":"normal","altText":"back.png","width":124,"height":124,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":352,"yPos":438,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":31,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":62,"bottom":56,"altText":"back.png","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":62,"height":56,"strokewidth":0}},"width":62,"height":56,"resume":true,"useHandCursor":true,"id":"6KJW9NQXue1","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6BYE9z3bUpO.5bJphpBZgfp"}}]}]},{"kind":"vectorshape","rotation":180,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/5gAaFfn4w2c_80_DX124_DY124.swf","type":"normal","altText":"back.png","width":124,"height":124,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":272,"yPos":438,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":31,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":62,"bottom":56,"altText":"back.png","pngfb":false,"pr":{"l":"Lib","i":12}},"html5data":{"xPos":0,"yPos":0,"width":62,"height":56,"strokewidth":0}},"width":62,"height":56,"resume":true,"useHandCursor":true,"id":"5YzLneVeKxd","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6BYE9z3bUpO.6Fvj9rRH51F"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6C3M9h3tZkH_CorrectReview","id":"01","linkId":"6C3M9h3tZkH_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":25}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":24}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6C3M9h3tZkH_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6C3M9h3tZkH_IncorrectReview","id":"01","linkId":"6C3M9h3tZkH_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":27}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6C3M9h3tZkH_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');