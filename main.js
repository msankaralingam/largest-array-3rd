var a=[4,6,3,2,-1,1,5,0];
			function largest 3rd(a){
			b=0;
				for(i=0; i<a.length; i++){
					for(j=i+1; j<a.length; j++){
						if(a[i]<a[j]){
							b=a[j];
							a[j]=a[i];
							a[i]=b;
						}
					}
				}
				console.log(a[2]);
			}
			largest3rd(a);