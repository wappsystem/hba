(function(){
    var modules={
        "panel-main":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child":    			{url:"$H/m/panel-child.html"},
        "panel-export-screening":   {url:"$H/m/panel-export-screening.html",router:1},
        "panel-export-baseline":    {url:"$H/m/panel-export-baseline.html",router:1},
        "panel-export-week2":    {url:"$H/m/panel-export-week2.html",router:1},
        "panel-export-week4":    {url:"$H/m/panel-export-week4.html",router:1},
        "panel-export-week6":    {url:"$H/m/panel-export-week6.html",router:1},
        "panel-export-week8":    {url:"$H/m/panel-export-week8.html",router:1},
        "panel-export-week10":    {url:"$H/m/panel-export-week10.html",router:1},
        "panel-export-exit":    {url:"$H/m/panel-export-exit.html",router:1},
        "export-data-hba": {url:"$H/m/export-data.html",Table:"hba-export",form_module:"export-form-hba"},
        "export-form-hba": {url:"$H/m/export-form.html",Table:"hba-export"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"hba-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-hba",
                                            online_questionnaire:"online-questionnaire-app-hba",
                                            visit:"visit-data"
                                        },                                    
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"hba-participant"},

        "online-questionnaire-setup-hba": 	{url:"$H/m/oq-setup.html",Table:"hba-participant"},
        "online-questionnaire-app-hba":    {url:"$H/oq.html"},

        "visit-data":  	                    {url:"$H/m/participant/visit-data.html",Table:"hba-visit",form_module:"visit-form"},
        "visit-form":  	                    {url:"$H/m/participant/visit-form.html",Table:"hba-visit"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"hba-notes",form_module:"notes-form"},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"hba-notes"},

        "panel-main-recruitment":    			{url:"$H/m/library/recruitment-all-data.html",Table:"hba-recruitment-record"},
        "panel-main-recruitment-eligible":     {url:"$H/m/library/recruitment-eligible-data.html",Table:"hba-recruitment-record"},
        "panel-main-recruitment-non-eligible": {url:"$H/m/library/recruitment-non-eligible-data.html",Table:"hba-recruitment-record"},


        "hba-randomisation-table-data":		    {url:"$H/m/library/randomisation-table-data.html",Table:"hba-randomisation-table",form_module:"hba-randomisation-table-form"},
        "hba-randomisation-table-form":		    {url:"$H/m/library/randomisation-table-form.html",Table:"hba-randomisation-table"},
        "hba-randomisation-upload-data":		    {url:"$H/m/library/randomisation-upload-data.html",Table:"hba-randomisation-upload",form_module:"hba-randomisation-upload-form",task_name:"Randomisation Document"},
        "hba-randomisation-upload-form":		    {url:"$H/m/library/randomisation-upload-form.html",Table:"hba-randomisation-upload",task_name:"Randomisation Document"},
        "hba-concom-medication-data":            {url:"$H/m/library/concom-medication-data.html",Table:"hba-concom-medication",form_module:"hba-concom-medication-form",task_name:"Concom Medication"},
        "hba-concom-medication-form":            {url:"$H/m/library/concom-medication-form.html",Table:"hba-concom-medication"},
        "hba-adverse-event-data":                {url:"$H/m/library/adverse-event-data.html",Table:"hba-adverse-event",form_module:"hba-adverse-event-form",task_name:"Adverse Event"},
        "hba-adverse-event-form":                {url:"$H/m/library/adverse-event-form.html",Table:"hba-adverse-event"},

        "hba-qeeg-psg-data":		            {url:"$H/m/library/qeeg-psg-data.html",Table:"hba-qeeg-psg",form_module:"hba-qeeg-psg-form",task_name:"qEEG PSG Data"},
        "hba-qeeg-psg-form":		            {url:"$H/m/library/qeeg-psg-form.html",Table:"hba-qeeg-psg",task_name:"qEEG PSG Data"},
        "hba-qeeg-psa-data":		            {url:"$H/m/library/qeeg-psa-data.html",Table:"hba-qeeg-psa",form_module:"hba-qeeg-psa-form",task_name:"qEEG PSA Data"},
        "hba-qeeg-psa-form":		            {url:"$H/m/library/qeeg-psa-form.html",Table:"hba-qeeg-psa",task_name:"qEEG PSA Data"},
        "hba-qeeg-spindle-data":		        {url:"$H/m/library/qeeg-spindle-data.html",Table:"hba-qeeg-spindle",form_module:"hba-qeeg-spindle-form",task_name:"qEEG Spindle Data"},
        "hba-qeeg-spindle-form":		        {url:"$H/m/library/qeeg-spindle-form.html",Table:"hba-qeeg-spindle",task_name:"qEEG Spindle Data"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
