var n=10;
var a=3;
var b=5;
var sum=0;
var count=0;
for(var i = 0; count<=n; i++){
    if (i%a==0){
        count++;
        if(i%b==0){
            
           sum=sum+i; 
        }
        
         }
}console.log(sum);

