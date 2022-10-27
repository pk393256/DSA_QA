//Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. 

function equalPartition(arr, n)
    {
        let totalSum=0
        let targetSum
        var ans=0
        for(let i=0;i<n;i++){
            totalSum+=arr[i]
        }
        if(totalSum%2!=0){return 0}
        else{
            targetSum=totalSum/2
        }
        check(0,targetSum)
        if(ans==1){
            return 1
        }else{
            return 0
        }
        
        function check(i,targetSum){
            if(targetSum==0){
                ans=1
                return
            }
            if(i==n){
                return 
            }
            if(ans==1){return}
            check(i+1,targetSum-arr[i])
            check(i+1,targetSum)
        }
          
    }