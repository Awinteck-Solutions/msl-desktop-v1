const baseUrl = "https://api.mslelearning.com";
const bucketUrl = "https://msl-storage.s3.amazonaws.com";
const cdnUrl = "https://d22xt9lq4ioh7j.cloudfront.net";

const apiEndpoints = {
    baseUrl,
    bucketUrl,
    cdnUrl,
    // USERS

    generateQRCode: baseUrl + '/windows/code/generate',
    windowLogin: baseUrl + '/windows/code/login',
    login: baseUrl + "/user/login",
    google_auth: baseUrl + "/user/auth",
    verify : baseUrl + '/user/verify/device',
    register: baseUrl + "/user/register",
    update: baseUrl + '/user/profile/update',
    profile: baseUrl + '/user/profile',
    resetPassword: baseUrl + '/user/resetpassword',
    changePassword: baseUrl + '/user/changepassword',
    uploadImage: baseUrl + '/user/upload_image',
    forgetPassword: baseUrl + '/user/forgotpassword',


    // COURSES  
    courseList: baseUrl + "/course/all",
    userCourses: baseUrl + '/course/user',
    singleCourse: baseUrl + "/course/single",
    lesson: baseUrl + "/lesson",

    // FEEDBACK
    sendFeedback: baseUrl + '/feedback/add',
    feedbackList: baseUrl + "/feedback/all",

    // REQUEST
    sendRequest: baseUrl + "/request/add"
};

export default apiEndpoints;