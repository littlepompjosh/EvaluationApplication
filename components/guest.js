import React from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    CheckBox,
    ToastAndroid,
    AsyncStorage,
    Button,
    ActivityIndicator
} from 'react-native'

// import SendSMS from 'react-native-sms'

import {sendSMS, getSMS_Status} from './smsSender'


const HOST_DEVICE_ID = 115490


class Guest extends React.Component{
    
   constructor(props){
       super(props);
       this.state={
           disable:true,
           verification_code:"",
           mobile:"",
           color:"#888",
           test:false,
           modalVisible:false,
           loader : false
       }
   }


   chech=()=>{
       if(this.state.test === false){
           if(this.state.mobile.length === 11){
             this.setState({color:"#3498db", disable:false, test:true})
           }else{
                this.setState({color:"#888", disable:true, test:false})
               ToastAndroid.showWithGravity(
                   'PLEASE INPUT YOUR MOBILE NUMBER TO PROCEED',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                );
           }
            
       }else{
        this.setState({color:"#888", disable:true, test:false})
       }
   }

   detectMobile =(number)=> {
        if(number.length === 11){
            if(this.state.test === true){
                this.setState({color:"#3498db", disable:false})
            }else{
                this.setState({color:"#888", disable:true})
            }
            
            // check mobile if exist /////////////////
        }else{
            this.setState({color:"#888", disable:true, test:false})
        }
   }

   verifyNumber = () => {
        

        AsyncStorage.getItem('VERIFICATION_CODE', (err, result) => {

            if(this.state.verification_code === result){
                AsyncStorage.setItem('VERIFICATION_CODE', null)
                AsyncStorage.setItem('MOBILE_NUMBER', this.state.mobile)
                this.setState({modalVisible:false})
                this.props.navigation.navigate('Instruct')
            }else{

                ToastAndroid.showWithGravity(
                    'INVALID VERIFICATION CODE',
                     ToastAndroid.LONG,
                     ToastAndroid.BOTTOM,
                );

            }
        });
        
        
   }

   generateCode = () => {
        
        const min = 1000;
        const max = 9999;
        const rand = min + Math.random() * (max - min);
        
        AsyncStorage.setItem('VERIFICATION_CODE', parseInt(rand).toString())
        // console.log('GENERATE CODE :', parseInt(rand).toString())

        this.setState({loader : true, disable: true});
        ToastAndroid.showWithGravity(
            'SENDING VERIFICATION CODE, PLEASE WAIT!',
             ToastAndroid.LONG,
             ToastAndroid.BOTTOM,
        );
        

        sendSMS(this.state.mobile, parseInt(rand).toString(), HOST_DEVICE_ID).then(res => {

            

            getSMS_Status(res[0].id).then( async result => {
  
                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                try{
                    var status = result
                    do {
                        console.log('GETTING STATUS');
                        getSMS_Status(res[0].id).then(loop_res => {     
                            console.log('DO WHILE RESULT :', loop_res)
                            status = loop_res
                        })

                        if(status === 'failed'){
                            break;
                        }
                        await sleep(5000);

                    }while((status !== 'sent'))

                    console.log('FINAL STATUS : ' + status)

                    if(status === 'sent'){

                        this.setState({modalVisible:true, loader : false, disable: false});
                        
                    }else{

                        ToastAndroid.showWithGravity(
                            'FAILED TO SEND VERIFICATION CODE PLEASE CHECK HOST DEVICE ID : ' + HOST_DEVICE_ID,
                             ToastAndroid.LONG,
                             ToastAndroid.BOTTOM,
                        );

                        this.setState({loader : false, disable: false});

                    }

                }catch (e){
                    console.log(e)
                }

            })

            
            
        })
   }



    render(){
        return(
            <View style={{flex:1, paddingTop:50, padding:20 }}>
                <Text> Please Enter your Mobile Number:</Text>
                <TextInput
                    onChangeText={(text) => {this.setState({mobile: text}), this.detectMobile(text)}}
                    style={{borderColor:"#dcdcdc", borderWidth:1.5, marginTop:5, borderRadius:12, paddingLeft:10}}
                    keyboardType = {'numeric'}
                    maxLength={11}
                />
                <View 
                    style={{
                        marginTop:50,
                        height:350,
                        width:"100%",
                        overflow:"scroll",
                        padding:20,
                        borderWidth:1,
                        borderRadius:12,
                        borderColor:"#dcdcdc"
                    }}>
                        <ScrollView>
                        <Text>Privacy Policy</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>STI College Marikina Students built the Evaluation Application app as a Free app. This SERVICE is provided by STI College Marikina Students at no cost and is intended for use as is.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Evaluation Application unless otherwise defined in this Privacy Policy.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Information Collection and Use</Text>
                        <View style={{height:20, width:"100%"}} />
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>The app does use third party services that may collect information used to identify you.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Link to privacy policy of third party service providers used by the app</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Log Data</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Cookies</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Service Providers</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>I may employ third-party companies and individuals due to the following reasons:</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>To facilitate our Service;</Text>
                        <Text>To provide the Service on our behalf;</Text>
                        <Text>To perform Service-related services; or</Text>
                        <Text>To assist us in analyzing how our Service is used.</Text>
                        <Text>I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                         <View style={{height:20, width:"100%"}} /> 
                        <Text>Security</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Links to Other Sites</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Children’s Privacy</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Changes to This Privacy Policy</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>Contact Us</Text>
                        <View style={{height:20, width:"100%"}} /> 
                        <Text>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at bautista.128672@marikina.sti.edu.ph.</Text>
                           
                         
                        </ScrollView>
                </View>
        
                    <View style={{ flexDirection:"row", marginTop: 10}}>
                    <CheckBox
                        value={this.state.test}
                        onChange={()=>this.chech()}
                    />
                    <Text style={{alignItems: 'center', justifyContent: 'center'}}> I agree with the Privacy Policy. </Text> 
                    </View>
               

                <TouchableOpacity disabled={this.state.disable}  onPress={()=>{this.generateCode()}} >
                    <View
                         style={{
                             marginTop:30,
                             height:50, 
                             width:"100%",
                             backgroundColor:this.state.color,
                             borderRadius:50,
                             justifyContent:"center",
                             alignItems:"center"
                         }}
                    >
                        {this.state.loader === false ? <Text style={{color:"#fff", fontWeight:"bold"}}>Proceed</Text> : <ActivityIndicator size="large" color="#fff" />}
                        
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    style={{
                        height:300,
                        width:300,
                        borderRadius:50
                    }}
                    onRequestClose={() =>this.setState({modalVisible:false}) }
                  >
                      <View style={{flex:1, paddingTop:150, padding:50 }}>
                            <Text>Enter Verification Code:</Text>
                            <TextInput
                                onChangeText={(text) => this.setState({verification_code: text})}
                                style={{borderColor:"#dcdcdc", borderWidth:1.5, marginTop:5, borderRadius:12, paddingLeft:10}}
                                keyboardType={'numeric'}
                            />
                            <TouchableOpacity onPress={()=> this.verifyNumber()}
                            >
                                <View
                                    style={{
                                        marginTop:30,
                                        height:50, 
                                        width:"100%",
                                        backgroundColor:"#3498db",
                                        borderRadius:50,
                                        justifyContent:"center",
                                        alignItems:"center"
                                    }}
                                >
                                    <Text style={{color:"#fff"}}>Verify</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>

                </Modal>




                
            </View>
        );
    }
}

export default Guest;