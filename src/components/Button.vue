<template>
    <div>
        <!-- Button Component-->
     <button
     class="btn"
     :class="[buttonClass]"></button>
     <!-- @Slot button hint-->
         <div>
             <div slot="hint"></div>
         </div>
    </div>
</template>
<script>
// button types 
let buttonsTypes = ['primary', 'secondary', 'ternary'];
export default {
    props:{
        /**
         * To determine button type 
         */
            buttonType:{
            type: String,
            required: true,
            default:()=>{
                return buttonsTypes[0]
            },
            validator: (value) => {
                return buttonsTypes.indexOf(value) !== -1
            }
        },
    },
    computed:{
        // To return button class
        buttonClass(){
            return'btn-'+this.buttonType; //btn-primary
        }
    }
}
</script>