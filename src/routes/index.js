const express = require('express');
const router = express.Router();
const mainService = require('../service/mainService');
const { response, errorResponse } = require('../library/response');

const indoor = require('./indoor');

router.use('/indoor', indoor);

// (rssi) => {좌표}
router.post('/coord', async (req, res)=>{
    try {
      let result = await mainService.postCoord(req.body); 
      response('Success', result, res, 200);

  } catch (error) {
      console.log(error);
      errorResponse(error.message, res, error.statusCode);
      
  }
});

// (시작노드, 도착노드) => {최적 경로 리스트}
router.post('/route', async (req, res)=>{
  try {
    let result2 = await mainService.postRoute(req.body);
    response('Success', result2, res, 200);
  } 
  catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
  }
});

// (현재좌표, 도착좌표) => {도보 경로 리스트}
router.post('/outdoor', async (req, res)=>{
  try {
    let result = await mainService.postOutdoor(req.body);
    response('Success', result, res, 200);
  } 
  catch (error) {
    console.log(error);
    errorResponse(error.message, res, error.statusCode);
  }
});

module.exports = router;