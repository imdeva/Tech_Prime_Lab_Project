from flask import Flask , render_template, jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///newexample.sqlite"
db = SQLAlchemy(app)

class Product_Details(db.Model):
	id = db.Column(db.Integer,primary_key=True,autoincrement=True )
	prodName=db.Column(db.String(80),nullable=False)
	category=db.Column(db.String(80),nullable=False)
	price=db.Column(db.Integer,nullable=False)
	quantity=db.Column(db.Integer,nullable=False)

@app.route("/list",methods=['GET','OPTIONS'])
def listAll():
	proList=Product_Details.query.all()
	print(proList)
	a = []
	for each in proList:
		b={
		"id":each.id,
		"prodName":each.prodName,
		"category":each.category,
		"price":each.price,
		"quantity":each.quantity
		}
		a.append(b)
		print(a)
	return jsonify(a)

@app.route("/display")
def hello():
	return render_template("index.html")	

@app.route("/")
def display():
	return render_template("display.html")

@app.route("/temp")
def temp():
    return jsonify({"msg":"yed zhap"})

@app.route('/add_data', methods=['POST','OPTIONS'])
def add_data():

	pname = request.json.get("product_name")
	cat= request.json.get("category_name")
	pri= request.json.get("price")
	quant= request.json.get("quantity")

	prd = Product_Details()
	prd.prodName = pname
	prd.category = cat
	prd.price = pri
	prd.quantity = quant
	db.session.add(prd)
	db.session.commit()
	return jsonify({"msg":"added sucessfully."})

if __name__ =="__main__":
	db.create_all()
	app.run(debug=True)


