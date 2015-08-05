<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


	</head>

	<body>
		<script type="text/javascript">
		//"use strict"
			
		function Set(){
			this.values = {};
			this.n = 0;
			this.add.apply(this,arguments);
		}

		Set.prototype.add = function(){
			for(var i=0;i<arguments.length,i++){

				var val = arguments[i];

				var str = Set._vas(val);

				if(!this.values.hasOwnProperty(str)){
					this.values[str] = val;
					this.n++;
				}
			}
			return this;
		}
		Set._v2s = function(val){
			switch(val){
				case undefined: return "u";break;
				case null: return "n";break;
				case true: return "t";break;
				case false: return "f";break;
				default: switch(typeof val){
					case 'number' : return "#"+val;break;
					case "string" : return '"'+val;break;
					default: return '@' +objectId(val);
				}
			}

			function objectId(o) {
		        var prop = "|**objectid**|";   // Private property name for storing ids
		        if (!o.hasOwnProperty(prop))   // If the object has no id
		            o[prop] = Set._v2s.next++; // Assign it the next available
		        return o[prop];                // Return the id
		    }
		}
		Set._v2s.next = 100;    // Start assigning object ids at this value.


		var s = Set(1,2,3);

		console.log(Set);
		console.log(s);

		</script>

</html>
