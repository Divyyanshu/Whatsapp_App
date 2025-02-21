const chatData = [
    { id: "1", name: "Rahul", message: "Hey, what's up?", time: "10:30 AM", avatar: "https://i.pravatar.cc/50?img=1" },
    { id: "2", name: "Amit", message: "Let's catch up later.", time: "09:45 AM", avatar: "https://i.pravatar.cc/50?img=2" },
    { id: "3", name: "Priya", message: "See you soon!", time: "08:20 AM", avatar: "https://i.pravatar.cc/50?img=3" },
    { id: "4", name: "Neha", message: "Okay, got it.", time: "07:10 AM", avatar: "https://i.pravatar.cc/50?img=4" },
    { id: "5", name: "Ravi", message: "Where are you?", time: "Yesterday", avatar: "https://i.pravatar.cc/50?img=5" },
    { id: "6", name: "Sneha", message: "All good here!", time: "Yesterday", avatar: "https://i.pravatar.cc/50?img=6" },
    { id: "7", name: "Ankit", message: "Ping me when free.", time: "Monday", avatar: "https://i.pravatar.cc/50?img=7" },
    { id: "8", name: "Sonu", message: "Thanks!", time: "Sunday", avatar: "https://i.pravatar.cc/50?img=8" },
    { id: "9", name: "Karan", message: "See you at 5.", time: "Saturday", avatar: "https://i.pravatar.cc/50?img=9" },
    { id: "10", name: "Deepak", message: "Noted!", time: "Friday", avatar: "https://i.pravatar.cc/50?img=10" },
    { id: "11", name: "Vikas", message: "What's the plan?", time: "Thursday", avatar: "https://i.pravatar.cc/50?img=11" },
    { id: "12", name: "Nisha", message: "I'll call you later.", time: "Wednesday", avatar: "https://i.pravatar.cc/50?img=12" },
    { id: "13", name: "Mohit", message: "Need your help!", time: "Tuesday", avatar: "https://i.pravatar.cc/50?img=13" },
    { id: "14", name: "Pooja", message: "Talk to you soon.", time: "Monday", avatar: "https://i.pravatar.cc/50?img=14" },
    { id: "15", name: "Aakash", message: "Good morning!", time: "Yesterday", avatar: "https://i.pravatar.cc/50?img=15" },
    { id: "16", name: "Divya", message: "Meeting at 4?", time: "10:00 AM", avatar: "https://i.pravatar.cc/50?img=16" },
    { id: "17", name: "Sandeep", message: "Call me ASAP.", time: "09:30 AM", avatar: "https://i.pravatar.cc/50?img=17" },
    { id: "18", name: "Megha", message: "Let's go out.", time: "08:50 AM", avatar: "https://i.pravatar.cc/50?img=18" },
    { id: "19", name: "Rohan", message: "How's everything?", time: "08:15 AM", avatar: "https://i.pravatar.cc/50?img=19" },
    { id: "20", name: "Komal", message: "I'm on my way.", time: "07:40 AM", avatar: "https://i.pravatar.cc/50?img=20" },
    { id: "21", name: "Arjun", message: "See you tomorrow.", time: "Monday", avatar: "https://i.pravatar.cc/50?img=21" },
    { id: "22", name: "Swati", message: "Lunch at 1?", time: "Sunday", avatar: "https://i.pravatar.cc/50?img=22" },
    { id: "23", name: "Manish", message: "I'm fine.", time: "Saturday", avatar: "https://i.pravatar.cc/50?img=23" },
    { id: "24", name: "Puneet", message: "Catch you later.", time: "Friday", avatar: "https://i.pravatar.cc/50?img=24" },
    { id: "25", name: "Anjali", message: "Busy right now.", time: "Thursday", avatar: "https://i.pravatar.cc/50?img=25" },
    { id: "26", name: "Harsh", message: "Send me the details.", time: "Wednesday", avatar: "https://i.pravatar.cc/50?img=26" },
    { id: "27", name: "Sonia", message: "Can we reschedule?", time: "Tuesday", avatar: "https://i.pravatar.cc/50?img=27" },
    { id: "28", name: "Raj", message: "Thanks a lot!", time: "Monday", avatar: "https://i.pravatar.cc/50?img=28" },
    { id: "29", name: "Kunal", message: "I'll be there.", time: "Yesterday", avatar: "https://i.pravatar.cc/50?img=29" },
    { id: "30", name: "Jaya", message: "All set!", time: "10:30 AM", avatar: "https://i.pravatar.cc/50?img=30" },
    { id: "31", name: "Aditi", message: "Sounds good.", time: "09:15 AM", avatar: "https://i.pravatar.cc/50?img=31" },
    { id: "32", name: "Sameer", message: "See you later!", time: "08:10 AM", avatar: "https://i.pravatar.cc/50?img=32" },
    { id: "33", name: "Ritika", message: "Let's meet soon.", time: "07:55 AM", avatar: "https://i.pravatar.cc/50?img=33" },
    { id: "34", name: "Ashish", message: "I'll check and confirm.", time: "07:30 AM", avatar: "https://i.pravatar.cc/50?img=34" },
    { id: "35", name: "Varun", message: "Great job!", time: "Monday", avatar: "https://i.pravatar.cc/50?img=35" },
    { id: "36", name: "Neeraj", message: "Let's discuss later.", time: "Sunday", avatar: "https://i.pravatar.cc/50?img=36" },
    { id: "37", name: "Maya", message: "Thanks for the update.", time: "Saturday", avatar: "https://i.pravatar.cc/50?img=37" },
    { id: "38", name: "Chetan", message: "See you soon!", time: "Friday", avatar: "https://i.pravatar.cc/50?img=38" },
    { id: "39", name: "Ishita", message: "I'll update you.", time: "Thursday", avatar: "https://i.pravatar.cc/50?img=39" },
    { id: "40", name: "Gaurav", message: "Let's meet tomorrow.", time: "Wednesday", avatar: "https://i.pravatar.cc/50?img=40" },
    { id: "41", name: "Tanya", message: "How's your day?", time: "Tuesday", avatar: "https://i.pravatar.cc/50?img=41" },
    { id: "42", name: "Yash", message: "Take care!", time: "Monday", avatar: "https://i.pravatar.cc/50?img=42" },
    { id: "43", name: "Rekha", message: "Done and dusted!", time: "Yesterday", avatar: "https://i.pravatar.cc/50?img=43" },
    { id: "44", name: "Vivek", message: "Call me later.", time: "10:45 AM", avatar: "https://i.pravatar.cc/50?img=44" },
  ];
  
  export default chatData;
  