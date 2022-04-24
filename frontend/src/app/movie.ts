export interface Movie {
  title : String,
  year : Number,
  rated : String,
  released : String,
  runtime : String,
  genre : String,
  director : String,
  actors : String,
  plot : String,
  poster : String,
  ratings : [{source:String, value:String}],
  type : String
}
