// Problem Description
// Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

// Input format
// First line contains an integer N, indicating the number of meetings.

// Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

// Output format
// Print the minimum number of rooms required.

// Constraints
// N <= 100000

// 0 <= S,E <= 1000000000 (10^9)

// Si < Ei

// Sample Input 1
// 3

// 0 20

// 5 10

// 10 15

// Sample Output 1
// 2

// Explanation 1
// One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

// So, only 2 rooms are required if total for the 3 meetings.
function meetingRooms(meetings) {
    
    if (!meetings || meetings.length === 0) {
          return 0;
      }
  
     
      let startTimes = meetings.map(meeting => meeting[0]).sort((a, b) => a - b);//sort the start times
      let endTimes = meetings.map(meeting => meeting[1]).sort((a, b) => a - b);//sort the end times
  
      let startPointer = 0;     //start pointer
      let endPointer = 0;     //end pointer
      let roomsInUse = 0;   //rooms in use
      let maxRooms = 0;   // max rooms
  
  
      while (startPointer < meetings.length) {  //loop through the meetings
          if (startTimes[startPointer] < endTimes[endPointer]) {//if start time is less than end time
             
              roomsInUse++;
              startPointer++;
          } else {
             
              roomsInUse--;
              endPointer++;
          }
  
       
          maxRooms = Math.max(maxRooms, roomsInUse);
      }
  
      return maxRooms;
  
  }

let meetings = [[0, 20], [5, 10], [10, 15]];
console.log(meetingRooms(meetings)); //2
