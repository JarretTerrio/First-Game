#pragma strict

public var jumpingHeight = 3;
private var rb:Rigidbody2D;


function Start () 
{
	rb = this.GetComponent.<Rigidbody2D>();
}

function FixedUpdate () 
{
	if (Input.GetKeyDown(KeyCode.Space)) {
		var force : Vector2 = Vector2(0,120); 
		rb.AddForce(force);
	}
	if (Input.GetKey(KeyCode.LeftArrow)) {
		this.transform.position.x -= 1 * Time.deltaTime;
	}
	if (Input.GetKey(KeyCode.RightArrow)) {
		this.transform.position.x += 1 * Time.deltaTime;
	}
 } 

