const photos = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
  ];

const  test =[
    {
        name : '뚜루루루루루',
        age : 12
    },
    {
        name : '뚜루루루루루',
        age : 12
    },
]


  export default function SlideHandler(request, response) {
    const { method } = request;
    // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
    if (method === "GET") {
      return response.status(200).json({
        photos,test
      });
    }
  }