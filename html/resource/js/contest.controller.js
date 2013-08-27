

function ContestListCtrl($scope, Contest) {
  $scope.contests = Contest.query();
  $scope.gridOptions = { 
  	data: 'contests',
  	
  	columnDefs: [{field:'id', displayName:'Id',width:100}
  				 ,{field:'phase_name', displayName:'Phase'}
  				 ,{field:'title', displayName:'Title'}
  				 ,{field:'prize_seed', displayName:'Seed'}
  				 ,{field:'total_entries', displayName:'Entries'}
  				 ,{field:'total_votes', displayName:'Votes'}
  				 ,{field:'grand_total', displayName:'Prize'}
  				 ,{field:'created', displayName:'Created'}
  				]
    };
  
  
}

function ContestDetailDialog($scope, $dialog){

  $scope.opts = {
      backdropFade: true,
      dialogFade: true
   };

  $scope.openDialog = function(){
  	
    var d = $dialog.dialog($scope.opts);
    d.open('/resource/partial/catagory_dialog.htm','ContestDialogCtrl');
  };

  
}

function ContestDialogCtrl($scope, dialog, contest_types,contest_phases){
	
  $scope.types = contest_types.query();
  $scope.type_radioModel = {
    id: "1"
  };
  $scope.phases = contest_phases.query();
  $scope.phase_radioModel = {
    id: "1"
  };
  $scope.close = function(Contest){
    dialog.close(Contest);
  };
  
}