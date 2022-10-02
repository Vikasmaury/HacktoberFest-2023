<script>

// JavaScript program to solve Gold Mine problem
function collectGold(gold, x, y, n, m, dp)
{

	// Base condition.
	if ((x < 0) || (x == n) || (y == m)) {
		return 0;
	}

	if(dp[x][y] != -1){
		return dp[x][y] ;
	}

	// Right upper diagonal
	let rightUpperDiagonal = collectGold(gold, x - 1, y + 1, n, m, dp);

	// right
	let right = collectGold(gold, x, y + 1, n, m, dp);

	// Lower right diagonal
	let rightLowerDiagonal = collectGold(gold, x + 1, y + 1, n, m, dp);

	// Return the maximum and store the value
	return dp[x][y] = gold[x][y] + Math.max(Math.max(rightUpperDiagonal, rightLowerDiagonal), right);
}

function getMaxGold(gold,n,m)
{
	let maxGold = 0;
	// Initialize the dp vector
	let dp = new Array(n);
	for(let i = 0; i < n; i++)
	{
		dp[i] = new Array(m).fill(-1);
	}
	for (let i = 0; i < n; i++)
	{

		// Recursive function call for ith row.
		let goldCollected = collectGold(gold, i, 0, n, m, dp);
		maxGold = Math.max(maxGold, goldCollected);
	}

	return maxGold;
}

// Driver Code

let gold = [ [1, 3, 1, 5],
		[2, 2, 4, 1],
		[5, 0, 2, 3],
		[0, 6, 1, 2] ];
let m = 4, n = 4;
document.write(getMaxGold(gold, n, m));

</script>
