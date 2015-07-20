options( digits = 16 );
library( jsonlite );

x0 = 0
gamma = 4
probs = 0:24 / 25
y = qcauchy( probs, x0, gamma )

cat( y, sep = ",\n" )

data = list(
	x0 = x0,
	gamma = gamma,
	data = probs,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
