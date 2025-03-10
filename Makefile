########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Gunnika Kapoor
SID = 1002052101
EMAIL = gxk2101@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
YOUTUBE=https://www.youtube.com/watch?v=rWgZeT3VDLY
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)
	@echo $(YOUTUBE)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"