            //Case 1 

        var aa=[];
        var randprev;
        for (i=0;i<10;i++)
        {
          var  randnew=Math.random()
          randnew = (randnew*10)+1;
          randnew = Math.floor(randnew);

             if(aa.indexOf(randnew)!=-1)
            {
               continue;
               
            }
            aa[i]=randnew
            randprev=randnew;
            console.log(randprev)
        }
console.log(aa)