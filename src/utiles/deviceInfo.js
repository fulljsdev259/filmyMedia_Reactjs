import {Dimensions, PixelRatio} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import deviceDeepInfo from './deviceDeepInfo';
const {height, width} = Dimensions.get('window');


const DeviceInfo ={
    width,
    height,
    pixel:(size)=>PixelRatio.getPixelSizeForLayoutSize(size),
    wp:(size)=>wp(size),
    hp:(size)=>hp(size),
    isSmall:height < 640 ? true : false,
    // deviceDeepInfo
}

export default DeviceInfo;