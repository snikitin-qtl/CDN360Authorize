import crypto from 'crypto';

const makePasswd = (dateStr, apiKey) => {
    return crypto.createHmac('sha1', apiKey).update(dateStr).digest('base64');
};
  
const base64 = (str) => {
    return Buffer.from(str).toString('base64');
};

const makeAuthString = (user, pass) => {
    const userPassPair = `${user}:${pass}`;
    return `Basic ${base64(userPassPair)}`;
};

@registerDynamicValueClass
class CDN360DynamicAuth {
  static identifier = 'com.quantil.CDN360DynamicAuth'
  static title = 'CDN360 Dynamic Auth'
  static help = 'https://quantil.com/'
  static inputs = [
    InputField('apiName', 'API Name', "String", {placeholder: "Type API Name"}),
    InputField('apiKey', 'API Key', "SecureValue", {placeholder: "Type API Key"})
  ]

  evaluate(context) {
    if (context.runtimeInfo.task != 'requestSend') {
      return '** AuthString is only generated during request send **'
    }
    const dateString = new Date().toUTCString();
    return makeAuthString(this.apiName, makePasswd(dateString, this.apiKey));
  }
}