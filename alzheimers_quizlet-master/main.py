from flask import Flask, request
#import json

"""
class User(object):
	def __init__(self, name, dob, bio, relation):
		self.name = name
		self.dob = dob
		self.bio = bio
		self.relation = relation
class UserList(object):
	def __init__(self, array):
		self.array = array

	def add_user(self, user):
		#user is an instance of the user class
		if user.type == User:
			self.array.append(user)
		else:
			raise ValueError("Incorrect Data Type for add_user: {}".format(user.type))

class MainUser(User):
	def __init__(self):
		print("made a user with name: {}".format(self.name))

class Family(object):
	def __init__(self, main_user, user_list):
		#main user is an instance of mainUser class
		#user_list is an array of user objects
		self.main_user = main_user
		self.user_list = user_list

	def get_family_info(self):
		fam_dict = {}
		for user in user_list:
			fam_dict[str(user.name)] = {"name":user.name
										"DOB":user.dob,
										"bio":user.bio,
										"relation":user.realtion}
		return json.dumps(fam_dict)

class Families(object):
	def __init__(self, fam_list):
		self.fam_list = fam_list

	def add_family(self, family):
		self.fam_list()
"""
app = Flask(__name__, static_folder='website', static_url_path='')
#user_list = UserList([])
#families = Families([])


@app.route('/')
def root():
	return app.send_static_file('test.html')

"""
@app.route('/createUser', methods=["POST"])
def createUser():
	try:
		name = request.json["name"]
		dob = request.json["DOB"]
		bio = request.json["bio"]
		relation = request.json["relation"]
		user_list.append(User(name, dob, bio, relation))
		print('Created new User: {}'.foramt(name))
		return "Success!"
	except Exception as e:
		return e

@app.rout('/createFamily', methods=["POST"])
def createFamily():
	try:
		main_user = request.json["main_user"]
		user_list = request.json["user_list"]
		families.append(Family(main_user, user_list))
		print('Created new Family with main_user: {}'.format(main_user.name))
"""

if __name__ == "__main__":
	app.run(debug=True)