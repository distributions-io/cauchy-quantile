options( digits = 16 );
library( jsonlite );


x0 = 5
gamma = 10
probs = seq( 0, 1, 0.1 )
y = qcauchy( probs, x0, gamma )

cat( y, sep = ",\n" )

data = list(
	x0 = x0,
	gamma = gamma,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/accessor.json" )
