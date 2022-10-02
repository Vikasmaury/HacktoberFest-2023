# Python3 program to solve Gold Mine problem
def collectGold(gold, x, y, n, m, dp):

	# Base condition.
	if ((x < 0) or (x == n) or (y == m)):
		return 0

	if(dp[x][y] != -1):
		return dp[x][y]

	# Right upper diagonal
	rightUpperDiagonal = collectGold(gold, x - 1, y + 1, n, m, dp)

		# right
	right = collectGold(gold, x, y + 1, n, m, dp)

	# Lower right diagonal
	rightLowerDiagonal = collectGold(gold, x + 1, y + 1, n, m, dp)

	# Return the maximum and store the value
	dp[x][y] = gold[x][y] + max(max(rightUpperDiagonal, rightLowerDiagonal), right)
	return dp[x][y]


def getMaxGold(gold,n,m):

	maxGold = 0
	# Initialize the dp vector
	dp = [[-1 for i in range(m)]for j in range(n)]
	
	for i in range(n):

		# Recursive function call for ith row.
		goldCollected = collectGold(gold, i, 0, n, m, dp)
		maxGold = max(maxGold, goldCollected)

	return maxGold

# Driver Code

gold = [ [1, 3, 1, 5],
		[2, 2, 4, 1],
		[5, 0, 2, 3],
		[0, 6, 1, 2] ]
m,n = 4,4
print(getMaxGold(gold, n, m))

