
let ones={
    '0':'',    '00':'',

    '1':'One',    '01':'One',
    '2':'Two',    '02':'Two',
    '3':'Three',    '03':'Three',
    '4':'Four',    '04':'Four',
    '5':'Five',    '05':'Five',
    '6':'Six',    '06':'Six',
    '7':'Seven',    '07':'Seven',
    '8':'Eight',    '08':'Eight',
    '9':'Nine',    '09':'Nine',

    '10':'Ten',
    '11':'Eleven',
    '12':'Twelve',
    '13':'Thirteen',
    '14':'Fourteen',
    '15':'Fifteen',
    '16':'Sixteen',
    '17':'Seventeen',
    '18':'Eighteen',
    '19':'Nineteen',
};
let tens={
    '0':'',
    '1':'',
    '2':'Twenty',
    '3':'Thirty',
    '4':'Forty',
    '5':'Fifty',
    '6':'Sixty',
    '7':'Seventy',
    '8':'Eighty',
    '9':'Ninety',
};
let millsd={
    '1':'Hundred',
    '2':'Thousand',
    '3':'Million',
    '4':'Billion',
    '5':'Trillion',
}





function processData(input) {
    //Enter your code here
    // console.log(':::::::::::::::::::::::::::::::::::');
    // console.log(':::::::::::::::::::::::::::::::::::');
    // console.log('input:');
    // console.log(input);
    let ia = input.split('\n');
    let count = parseInt(ia.shift(),10);
    // console.log('count:',count);

    for(let i=0;i<count;++i){
        // console.log('');
        // console.log('====================');
        // // console.log('num #:',i,'val:',ia[i]);
        processNum(ia[i]);
    }
} 

function processNum(snum){
    let ret='';
    // console.log('processNum(',snum,')');
    // console.log('string(',snum,')');
    snum = snum.replace(/\s+/g, '')
    console.log('');
    console.log('string(',snum,')');
    let mills= snum.length===1?1:Math.ceil((snum.length)/3);
    let subm=(snum.length-1)%3;
    // console.log('chunk by threes:',snum.length, mills, subm);
    let cur;
    if(mills>=5){ //tills
        cur  = snum.substring(0,subm+1);
        snum = snum.substring(subm+1);
        let n=parseInt(cur,10);
        let pre='';
        cur = ''+n;
        // console.log(cur,cur.length);
        switch(cur.length){
            case 3:
                let h=cur.substring(0,1);
                cur = cur.substring(1,3);
                pre = ones[h]+' '+millsd[1];
            case 2: case 1:
                if(n===0){ }
                else if(n<20){
                    // // console.log(ones[cur],millsd[4]);
                    // ret += ones[cur] +' '+ millsd[4];
                    if( cur=='0')
                        if( pre.length>0 )
                            pre += ' '+ millsd[5];
                        else
                            pre  =      millsd[5];
                    else
                        if( pre.length>0 )
                            pre += ' '+ ones[cur] +' '+ millsd[5];
                        else
                            pre  =      ones[cur] +' '+ millsd[5];
                }else{
                    let t = cur.substring(0,1);
                    let s = cur.substring(1,2);
                    // // console.log(tens[t],ones[s],millsd[4]);
                    // ret += tens[t] +' '+ ones[s] +' '+ millsd[4];
                    if( cur=='0')
                        if( pre.length>0 )
                            pre += ' '+ tens[t] +' '+ millsd[5];
                        else
                            pre  =      tens[t] +' '+ millsd[5];
                    else
                        if( pre.length>0 )
                            pre += ' '+ tens[t] +' '+ ones[s] +' '+ millsd[5];
                        else
                            pre  =      tens[t] +' '+ ones[s] +' '+ millsd[5];

                }
                // console.log(pre);
                break;
            default:
                // console.log('error: unexpected cur.length:', cur.length);
                break;
        }
        if( ret.length>0)
            ret += ' ' + pre;
        else
            ret = pre;
        --mills;
        subm=2;
    }
    if(mills>=4){ //bills
        cur  = snum.substring(0,subm+1);
        snum = snum.substring(subm+1);
        let n=parseInt(cur,10);
        let pre='';
        cur = ''+n;

        // console.log(cur,cur.length);
        switch(cur.length){
            case 3:
                let h=cur.substring(0,1);
                cur = cur.substring(1,3);
                pre = ones[h]+' '+millsd[1];
            case 2: case 1:
                if(n===0){ }
                else if(n<20){
                    // // console.log(ones[cur],millsd[4]);
                    // ret += ones[cur] +' '+ millsd[4];\
                    if( cur=='0')
                        if( pre.length>0 )
                            pre += ' '+ millsd[4];
                        else
                            pre  =      millsd[4];
                    else
                        if( pre.length>0 )
                            pre += ' '+ ones[cur] +' '+ millsd[4];
                        else
                            pre  =      ones[cur] +' '+ millsd[4];
                }else{
                    let t = cur.substring(0,1);
                    let s = cur.substring(1,2);
                    // // console.log(tens[t],ones[s],millsd[4]);
                    // ret += tens[t] +' '+ ones[s] +' '+ millsd[4];
                    if( cur=='0')
                        if( pre.length>0 )
                            pre += ' '+ tens[t] +' '+ millsd[4];
                        else
                            pre  =      tens[t] +' '+ millsd[4];
                    else
                        if( pre.length>0 )
                            pre += ' '+ tens[t] +' '+ ones[s] +' '+ millsd[4];
                        else
                            pre  =      tens[t] +' '+ ones[s] +' '+ millsd[4];

                }
                // console.log(pre);
                break;
            default:
                // console.log('error: unexpected cur.length:', cur.length);
                break;
        }
        if( ret.length>0)
            ret += ' ' + pre;
        else
            ret = pre;
        --mills;
        subm=2;
    }
    if(mills>=3){//mills
        cur  = snum.substring(0,subm+1);
        snum = snum.substring(subm+1);
        let n=parseInt(cur,10);
        let pre='';
        cur = ''+n;
        switch(cur.length){
            case 3:
                let h=cur.substring(0,1);
                cur = cur.substring(1,3);
                pre = ones[h]+' '+millsd[1];
            case 2: case 1:
                if(n===0){ 
                    // console.log(pre);
                }else if(n<20){ 
                    if( cur=='0')
                        if( pre.length>0 )
                            pre += ' '+ millsd[3];
                        else
                            pre  =      millsd[3];
                    else
                        if( pre.length>0 )
                            pre += ' '+ ones[cur] +' '+ millsd[3];
                        else
                            pre  =      ones[cur] +' '+ millsd[3];
                }else{
                    let t = cur.substring(0,1);
                    let s = cur.substring(1,2);
                    if( cur=='0')
                        if( pre.length>0 )
                            pre += ' '+ tens[t] +' '+ millsd[3];
                        else
                            pre  =      tens[t] +' '+ millsd[3];
                    else
                        if( pre.length>0 )
                            pre += ' '+ tens[t] +' '+ ones[s] +' '+ millsd[3];
                        else
                            pre  =      tens[t] +' '+ ones[s] +' '+ millsd[3];
                }
                // console.log(pre);
                break;
            default:
                // console.log('error: unexpected cur.length:', cur.length);
                break;
        }
        if( ret.length>0)
            ret += ' ' + pre;
        else
            ret = pre;
        --mills;
        subm=2;
    }
    if(mills>=2){//thous
        cur  = snum.substring(0,subm+1);
        snum = snum.substring(subm+1);
        // console.log(cur, millsd[2]);
        let n=parseInt(cur,10)%100;
        let pre='';
        cur = ''+n;
        if( cur.length === 3 ){
            let h=cur.substring(0,1);
            cur = cur.substring(1,3);
            pre = ones[h]+' '+millsd[1];
        }
        if(dn>0){
            if(dn<20){ 
                pre += cur=='0' ? '' : ((pre.length>0?' ':'') + ones[cur]);
            }else{
                let t = cur.substring(0,1);
                let s = cur.substring(1,2);
                pre += (pre.length>0?' ':'') + tens[t] + (s=='0' ? '' : (' '+ ones[s]));
            }
        }
        if( pre.length>0) pre += ' '+ millsd[2];

        // switch(cur.length){
        //     case 3:
        //         let h=cur.substring(0,1);
        //         cur = cur.substring(1,3);
        //         pre = ones[h]+' '+millsd[1];
        //     case 2: case 1:
        //         if(n===0){ 
        //             // console.log(pre);
        //         }else if(n<20){ 
        //             if( cur=='0')
        //                 if( pre.length>0 )
        //                     pre += ' '+ millsd[2];
        //                 else
        //                     pre  =      millsd[2];
        //             else
        //                 if( pre.length>0 )
        //                     pre += ' '+ ones[cur] +' '+ millsd[2];
        //                 else
        //                     pre  =      ones[cur] +' '+ millsd[2];
        //         }else{
        //             let t = cur.substring(0,1);
        //             let s = cur.substring(1,2);
        //             if( cur=='0')
        //                 if( pre.length>0 )
        //                     pre += ' '+ tens[t] +' '+ millsd[2];
        //                 else
        //                     pre  =      tens[t] +' '+ millsd[2];
        //             else
        //                 if( pre.length>0 )
        //                     pre += ' '+ tens[t] +' '+ ones[s] +' '+ millsd[2];
        //                 else
        //                     pre  =      tens[t] +' '+ ones[s] +' '+ millsd[2];
        //         }
        //         // console.log(pre);
        //         break;
        //     default:
        //         // console.log('error: unexpected cur.length:', cur.length);
        //         break;
        // }
        if( ret.length>0)
            ret += ' ' + pre;
        else
            ret = pre;

        --mills;
        subm=2;
    }
    if(mills>=1){//less
        cur  = snum.substring(0,subm+1);
        snum = snum.substring(subm+1);
        let  n=parseInt(cur,10);
        let dn=n%100;
        let pre='';
        cur = ''+n;
        if( cur.length === 3 ){
            let h=cur.substring(0,1);
            cur = cur.substring(1,3);
            pre = ones[h]+' '+millsd[1];
        }
        if(dn>0){
            if(dn<20){ 
                pre += cur=='0' ? '' : ((pre.length>0?' ':'') + ones[cur]);
            }else{
                let t = cur.substring(0,1);
                let s = cur.substring(1,2);
                pre += (pre.length>0?' ':'') + tens[t] + (s=='0' ? '' : (' '+ ones[s]));
            }
        }
        if( ret.length>0)
            ret += ' ' + pre;
        else
            ret = pre;
        --mills;
        subm=2;
    }
    console.log(ret);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
